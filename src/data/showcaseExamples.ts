import { ComponentType } from 'react';

import SignUpForm from '@/components/Showcase/SignUpForm';
import SignInForm from '@/components/Showcase/SignInForm';
import ContactForm from '@/components/Showcase/ContactForm';
import PaymentForm from '@/components/Showcase/PaymentForm';
import VehicleRegistrationForm from '@/components/Showcase/VehicleRegistrationForm';
import TravelBookingForm from '@/components/Showcase/TravelBookingForm';

import {
    SIGNUP_EXAMPLE,
    SIGNIN_EXAMPLE,
    CONTACT_EXAMPLE,
    PAYMENT_EXAMPLE,
    VEHICLE_EXAMPLE,
    TRAVEL_EXAMPLE
} from '@/constants/showcaseExamples';

export interface ShowcaseItem {
    slug: string;
    title: string;
    description: string;
    Component: ComponentType;
    code: string;
    fileName: string;
}

const EXAMPLES: ShowcaseItem[] = [
    {
        slug: 'sign-up',
        title: 'Sign up form',
        description:
            'Username, email and password validation, a masked phone number and a required terms checkbox with a custom error message.',
        Component: SignUpForm,
        code: SIGNUP_EXAMPLE,
        fileName: 'SignUpForm.tsx'
    },
    {
        slug: 'sign-in',
        title: 'Sign in form',
        description:
            'A minimal login form showing how to override the default browser validation messages with your own copy.',
        Component: SignInForm,
        code: SIGNIN_EXAMPLE,
        fileName: 'SignInForm.tsx'
    },
    {
        slug: 'contact-us',
        title: 'Contact us form',
        description:
            'Combined validation rules, a Select for the subject, a Textarea for the message, and a masked phone field.',
        Component: ContactForm,
        code: CONTACT_EXAMPLE,
        fileName: 'ContactForm.tsx'
    },
    {
        slug: 'international-payment',
        title: 'International payment form',
        description:
            'Country-aware VAT and IBAN validation using @formfusion/vat and @formfusion/iban, plus the built-in currency type.',
        Component: PaymentForm,
        code: PAYMENT_EXAMPLE,
        fileName: 'PaymentForm.tsx'
    },
    {
        slug: 'vehicle-registration',
        title: 'Vehicle registration form',
        description:
            'Licence plate, postcode and phone number validation that switches pattern by country, using three FormFusion sub-libraries at once.',
        Component: VehicleRegistrationForm,
        code: VEHICLE_EXAMPLE,
        fileName: 'VehicleRegistrationForm.tsx'
    },
    {
        slug: 'travel-booking',
        title: 'Travel booking form',
        description:
            'Passport and phone number validation per nationality, with a conditional EU Tax ID field that only appears where one applies.',
        Component: TravelBookingForm,
        code: TRAVEL_EXAMPLE,
        fileName: 'TravelBookingForm.tsx'
    }
];

export const getExampleBySlug = (slug: string) =>
    EXAMPLES.find((example) => example.slug === slug);

export default EXAMPLES;
