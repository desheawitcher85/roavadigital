import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const firstName = data.get('firstName')?.toString().trim() || '';
    const businessName = data.get('businessName')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const service = data.get('service')?.toString().trim() || '';
    const message = data.get('message')?.toString().trim() || '';

    if (!firstName || !businessName || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const html = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Business</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${businessName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Interested in</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${service || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message ? message.replace(/\n/g, '<br>') : 'None'}</td>
        </tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: 'Roava Digital <hello@roavadigital.com>',
      to: ['deshea.witcher85@gmail.com'],
      replyTo: email,
      subject: `New inquiry: ${businessName} — ${service || 'General'}`,
      text: `New contact form submission\n\nName: ${firstName}\nBusiness: ${businessName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nInterested in: ${service || 'Not specified'}\nMessage: ${message || 'None'}`,
      html,
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Server error. Please email hello@roavadigital.com directly.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
