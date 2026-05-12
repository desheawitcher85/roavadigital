import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const firstName = data.get('firstName')?.toString().trim() || '';
    const businessName = data.get('businessName')?.toString().trim() || '';
    const website = data.get('website')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const city = data.get('city')?.toString().trim() || '';
    const yearsInBusiness = data.get('yearsInBusiness')?.toString().trim() || '';

    if (!firstName || !businessName || !email || !city) {
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
      <h2>New Free Audit Request</h2>
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
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Website</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${website || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">City / Area</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${city}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Years in business</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${yearsInBusiness || 'Not provided'}</td>
        </tr>
      </table>
    `;

    const { error } = await resend.emails.send({
      from: 'Roava Digital <hello@roavadigital.com>',
      to: ['deshea.witcher85@gmail.com'],
      replyTo: email,
      subject: `Free Audit Request: ${businessName} (${city})`,
      text: `New audit request\n\nName: ${firstName}\nBusiness: ${businessName}\nWebsite: ${website || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nEmail: ${email}\nCity: ${city}\nYears in business: ${yearsInBusiness || 'Not provided'}`,
      html,
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Audit request error:', err);
    return new Response(JSON.stringify({ error: 'Server error. Please email hello@roavadigital.com directly.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
