// Assuming this is part of a larger schema
export const home = {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        // navbar components
        {
            name: 'navbare',
            title: 'Navbare Components',
            type: 'object',
            fields: [
                {
                    name: 'logo',
                    title: 'Logo Name',
                    type: 'string',
                    description: '',
                    description: 'Enter the first letter of your first name and last name in uppercase (e.g., "JD" for John Doe)',
                    validation: (Rule) => Rule.required().max(3),


                },
                {
                    name: 'socialMediaLinks',
                    title: 'Social Media Links',
                    type: 'document',
                    fields: [
                        {
                            name: 'githubURL',
                            title: 'GitHub URL',
                            type: 'url',
                            description: 'Enter your GitHub URL here if you want the GitHub icon to appear. Leave it empty if you do not want the icon to appear.',
                        },
                        {
                            name: 'mediumURL',
                            title: 'Medium URL',
                            type: 'url',
                            description: 'Enter your Medium URL here if you want the Medium icon to appear. Leave it empty if you do not want the icon to appear.',
                        },
                        {
                            name: 'LinkedIn',
                            title: 'LinkedIn URL',
                            type: 'url',
                            description: 'Enter your LinkedIn URL here if you want the LinkedIn icon to appear. Leave it empty if you do not want the icon to appear.',
                        },
                        {
                            name: 'Dribbble',
                            title: 'Dribbble URL',
                            type: 'url',
                            description: 'Enter your Dribbble URL here if you want the Dribbble icon to appear. Leave it empty if you do not want the icon to appear.',
                        },
                        {
                            name: 'Pinterest',
                            title: 'Pinterest URL',
                            type: 'url',
                            description: 'Enter your Pinterest URL here if you want the Pinterest icon to appear. Leave it empty if you do not want the icon to appear.',
                        },
                        {
                            name: 'Instagram',
                            title: 'Instagram URL',
                            type: 'url',
                            description: 'Enter your Pinterest URL here if you want the Pinterest icon to appear. Leave it empty if you do not want the icon to appear.',
                        },
                        {
                            name: 'Facebook',
                            title: 'Facebook URL',
                            type: 'url',
                            description: 'Enter your Pinterest URL here if you want the Pinterest icon to appear. Leave it empty if you do not want the icon to appear.',
                        },


                    ], // Use the type defined in socialMediaLinks schema
                },


            ]
        },
        //body components
        {
            name: 'body',
            title: 'Body Components',
            type: 'object',
            fields: [
                {
                    name: 'profilePicture',
                    title: 'Profile Picture',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'homeheadline',
                    title: 'Home Headline',
                    type: 'string',
                },
                {
                    name: 'homeparagraph',
                    title: 'Home Paragraph',
                    type: 'text',
                },
                {
                    name: 'resume',
                    title: 'Resume PDF',
                    type: 'file',
                    options: {
                        accept: '.pdf',
                    },
                },
                {
                    name: 'contactEmail',
                    title: 'Contact Email',
                    type: 'email',
                    validation: (Rule) => Rule.required(),
                },
            ],
        },

        //footer components
        {
            name: 'footer',
            title: 'Footer Elements',

            type: 'document',
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                    description:"enter the name that you want to be diplay after ' build by '",
                    validation: (Rule) => Rule.required(),

                },
                {
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'object',
                    fields: [
                        {
                            name: 'countryCode',
                            title: 'Country Code',
                            type: 'string',
                            validation: (Rule) => Rule.required(),

                            options: {
                                list: [
                                    { title: '+212 (Morocco)', value: '+212' },

                                    { title: '+1 (United States)', value: '+1' },
                                    { title: '+44 (United Kingdom)', value: '+44' },
                                    { title: '+33 (France)', value: '+33' },
                                    { title: '+49 (Germany)', value: '+49' },
                                    { title: '+91 (India)', value: '+91' },
                                    { title: '+81 (Japan)', value: '+81' },
                                    { title: '+34 (Spain)', value: '+34' },
                                    { title: '+39 (Italy)', value: '+39' },
                                    { title: '+86 (China)', value: '+86' },
                                    { title: '+52 (Mexico)', value: '+52' },
                                ],
                            },
                        },
                        {
                            name: 'phoneNumber',
                            title: 'Phone Number',
                            type: 'string',
                            validation: (Rule) => Rule.required(),

                        },
                    ],
                },
            ],
        }

    ],
};
