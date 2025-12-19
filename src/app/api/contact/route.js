import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Log the form submission (in production, you would save to database or send email)
    console.log('Form submission received:', {
      name,
      email,
      phone,
      company: company || 'N/A',
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        data: {
          name,
          email,
          phone,
          company,
          message,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
