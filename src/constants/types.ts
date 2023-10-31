export default {
    email: {
        info: 'Enter a valid/invalid email address to test. For example:',
        correct: '<span>test@example.com</span> is a valid email',
        incorrect: '<span>testexample.com</span> is not a valid email',
        description: 'Used for fields for editing an email address'
    },
    password: {
        info: 'Enter a valid/invalid password to test. A valid password contains of at least 8 characters of which \
    one lower one uppercase letter, a number and a special character. For example:',
        correct: '<span>Passw0rd!</span> is a valid password',
        incorrect: '<span>123456789</span> is not a valid password',
        description:
            'Used for secured password fields. A secured password contains of at least 8 characters of which\
     one lower one uppercase letter, a number and a special character'
    },
    search: {
        info: 'Usually used for search bars. It allows only numbers, letters and spaces. For example:',
        correct: '<span>Spaces and Digits 987</span> is a valid search query',
        incorrect: '<span>!@#$%^&*</span> is not a valid search query',
        description:
            'Used for search bar fields. It allows only numbers, letters and spaces'
    },
    url: {
        info: 'Enter a valid/invalid url with protocol to test. For example:',
        correct: '<span>https://www.example.com</span> is a valid url',
        incorrect: '<span>htp://www.example.com</span> is not a valid url',
        description: 'Used for fields for editing a url'
    },
    tel: {
        info: 'Enter a valid/invalid phone numnber to test. A valid phone number should start with +following \
    the country prefix of max 4 digits, a space and the phone number of max 10 characters. For example:',
        correct: '<span>+1 1234567890</span> is a valid phone number',
        incorrect: '<span>1234567890</span> is not a valid phone number',
        description:
            "Used for fields for editing a telephone number.A valid phone number should start with a '+' following \
    the country prefix of max 4 digits, a space and the phone number of max 10 characters"
    },
    alphanumeric: {
        info: 'Used for restricting a input to contain only letters or numbers. For example:',
        correct: '<span>ABC 123</span> is a valid alphanumeric value',
        incorrect: '<span>ABC !@</span> is not a valid alphanumeric value',
        description:
            'Used for restricting a field to contain only letters or numbers'
    },
    alphabetic: {
        info: 'Used for restricting a input to contain only letters. For example:',
        correct: '<span>ABC</span> is a valid alphabetic value',
        incorrect: '<span>ABC123</span> is not a valid alphabetic value',
        description: 'Used for restricting a field to contain only letters'
    },
    numeric: {
        info: 'Used for restricting a input to contain only numbers. For example:',
        correct: '<span>12345</span> is a valid numeric value',
        incorrect: '<span>ABCDE</span> is not a valid numeric value',
        description: 'Used for restricting a field to contain only numbers'
    },
    lowercase: {
        info: 'Enter a valid/invalid lowercase string to test. A valid lowercase string contains only lowercase letters. For example:',
        correct: '<span>abcdefg</span> is a valid lowercase string.',
        incorrect: '<span>AbC123</span> is not a valid lowercase string.',
        description:
            'Used for validating lowercase strings. A lowercase string is considered valid if it contains only lowercase letters.'
    },
    uppercase: {
        info: 'Enter a valid/invalid uppercase string to test. A valid uppercase string contains only uppercase letters. For example:',
        correct: '<span>ABCDEFG</span> is a valid uppercase string.',
        incorrect: '<span>AbC123</span> is not a valid uppercase string.',
        description:
            'Used for validating uppercase strings. An uppercase string is considered valid if it contains only uppercase letters.'
    },
    boolean: {
        info: "Enter a valid/invalid boolean value to test. A valid boolean value can be 'true,' 'false,' 'yes,' 'no,' '1,' or '0.' For example:",
        correct: '<span>true</span> is a valid boolean value.',
        incorrect: '<span>maybe</span> is not a valid boolean value.',
        description:
            "Used for validating boolean values. A boolean value is considered valid if it matches 'true,' 'false,' 'yes,' 'no,' '1,' or '0.'"
    },
    hexadecimal: {
        info: "Enter a valid/invalid hexadecimal string to test. A valid hexadecimal string may start with '0x' or '0h' and consists of hexadecimal characters (0-9, A-F). For example:",
        correct: '<span>0x1A2B3C</span> is a valid hexadecimal string.',
        incorrect: '<span>0xGHIJKL</span> is not a valid hexadecimal string.',
        description:
            "Used for validating hexadecimal strings. A hexadecimal string is considered valid if it starts with '0x' or '0h' and consists of hexadecimal characters (0-9, A-F)."
    },
    username: {
        info: 'Enter a valid/invalid username to test. A valid user name usually contains of alphanumeric characters\
    a @ _ or - but not spaces. For example:',
        correct: '<span>my_user_name</span> is a valid username',
        incorrect: '<span>my username!</span> is not a valid username',
        description:
            'Used for username fields. A valid username is considered to contain only alphanumeric characters,\
    a @ _ or -'
    },
    'credit-card-number-basic': {
        info: 'Enter a valid/invalid credit card number to test. A valid credit card number contains \
    only 16 numeric characters. This is the most basic example of CCN that validates only number of numeric characters\
    without hyphen or space. For example:',
        correct: '<span>1234567890123456</span> is a valid credit card number',
        incorrect: '<span>1232 232</span> is not a valid credit card number',
        description:
            'Used for credit card number fields. This is the most basic example of CCN that validates \
    only number of numeric characters. It allows value with only 16 characters'
    },
    'credit-card-number-hyphen': {
        info: 'Enter a valid/invalid credit card number to test. A valid credit card number contains \
    only 16 numeric characters delimited by hyphen. For example:',
        correct:
            '<span>1234-5678-9012-3456</span> is a valid credit card number',
        incorrect:
            '<span>9876-54321098-7654</span> is not a valid credit card number',
        description:
            'Used for credit card number fields. A credit card number is considered valid if it contains \
    only 16 numeric characters delimited by hyphen'
    },
    'credit-card-number-space': {
        info: 'Enter a valid/invalid credit card number to test. A valid credit card number contains \
    only 16 numeric characters delimited by space. For example:',
        correct:
            '<span>1234 5678 9012 3456</span> is a valid credit card number',
        incorrect:
            '<span>abcdefgh12345678</span> is not a valid credit card number',
        description:
            'Used for credit card number fields. A credit card number is considered valid if it contains \
    only 16 numeric characters delimited by space'
    },
    'credit-card-number-amex': {
        info: "Enter a valid/invalid American Express credit card number to test. A valid American Express credit card number consists of 15 digits starting with '34' or '37'. For example:",
        correct:
            '<span>378282246310005</span> is a valid American Express credit card number.',
        incorrect:
            '<span>1234567890123456</span> is not a valid American Express credit card number.',
        description:
            "Used for validating American Express credit card numbers. An American Express credit card number is considered valid if it consists of 15 digits and starts with either '34' or '37.'"
    },
    'credit-card-number-dinersclub': {
        info: "Enter a valid/invalid Diners Club credit card number to test. A valid Diners Club credit card number consists of 14 digits starting with '300' to '305' or '36' to '38'. For example:",
        correct:
            '<span>30345678901234</span> is a valid Diners Club credit card number.',
        incorrect:
            '<span>1234567890123456</span> is not a valid Diners Club credit card number.',
        description:
            "Used for validating Diners Club credit card numbers. A Diners Club credit card number is considered valid if it consists of 14 digits and starts with '300' to '305' or '36' to '38.'"
    },
    'credit-card-number-discover': {
        info: "Enter a valid/invalid Discover credit card number to test. A valid Discover credit card number consists of 16 digits and starts with '6011' or '65', followed by 12 to 15 additional digits. For example:",
        correct:
            '<span>6011123456789012</span> is a valid Discover credit card number.',
        incorrect:
            '<span>123456789012345</span> is not a valid Discover credit card number.',
        description:
            "Used for validating Discover credit card numbers. A Discover credit card number is considered valid if it consists of 16 digits and starts with '6011' or '65', followed by 12 to 15 additional digits."
    },
    'credit-card-number-jbc': {
        info: "Enter a valid/invalid JCB credit card number to test. A valid JCB credit card number consists of 16 digits starting with '2131', '1800', or '35', followed by 11 additional digits. For example:",
        correct:
            '<span>2131123456789012345</span> is a valid JCB credit card number.',
        incorrect:
            '<span>1234567890123456</span> is not a valid JCB credit card number.',
        description:
            "Used for validating JCB credit card numbers. A JCB credit card number is considered valid if it consists of 16 digits and starts with '2131', '1800', or '35', followed by 11 additional digits."
    },
    'credit-card-number-mastercard': {
        info: "Enter a valid/invalid MasterCard credit card number to test. A valid MasterCard credit card number consists of 16 digits starting with '51' to '55' or starts with '2221' to '2720', followed by 12 additional digits. For example:",
        correct:
            '<span>5555555555554444</span> is a valid MasterCard credit card number.',
        incorrect:
            '<span>1234567890123456</span> is not a valid MasterCard credit card number.',
        description:
            'Used for validating MasterCard credit card numbers. A MasterCard credit card number is considered valid if it consists of 16 digits and follows the specified patterns.'
    },
    'credit-card-number-unionpay': {
        info: "Enter a valid/invalid UnionPay credit card number to test. A valid UnionPay credit card number consists of either 15 or 16 digits and starts with '62', '81', or '82'. For example:",
        correct:
            '<span>6212345678901234</span> is a valid UnionPay credit card number.',
        incorrect:
            '<span>1234567890123456</span> is not a valid UnionPay credit card number.',
        description:
            'Used for validating UnionPay credit card numbers. A UnionPay credit card number is considered valid if it follows the specified patterns and consists of either 15 or 16 digits.'
    },
    'credit-card-number-visa': {
        info: "Enter a valid/invalid Visa credit card number to test. A valid Visa credit card number consists of 13 to 19 digits and starts with '4'. For example:",
        correct:
            '<span>4111111111111111</span> is a valid Visa credit card number.',
        incorrect:
            '<span>1234567890123456</span> is not a valid Visa credit card number.',
        description:
            "Used for validating Visa credit card numbers. A Visa credit card number is considered valid if it starts with '4' and has a total length of 13 to 19 digits."
    },
    ccv: {
        info: 'Enter a valid/invalid ccv value to test. A valid ccv contains only 3 numeric characters. For example:',
        correct: '<span>123</span> is a valid ccv',
        incorrect: '<span>1234</span> is not a valid ccv',
        description:
            'Used for CCV fields. A ccv is considered valid if it contains only 3 numeric characters'
    },
    'ccv-amex': {
        info: 'Enter a valid/invalid American express ccv value to test. A valid American express ccv contains only 4\
     numeric characters. For example:',
        correct: '<span>1234</span> is a valid amex ccv',
        incorrect: '<span>12</span> is not a valid amex ccv',
        description:
            'Used for American Express CCV fields. An American Express ccv is considered valid if it \
    contains only 4 numeric characters'
    },
    ipv4: {
        info: 'Enter a valid/invalid IPV4 address to test. For example:',
        correct: '<span>192.168.0.1</span> is a valid IPV4',
        incorrect: '<span>192.168.0.1.</span> is not a valid IPV4',
        description: 'Used for IPV4 fields'
    },
    ipv6: {
        info: 'Enter a valid/invalid IPV6 address to test. For example:',
        correct:
            '<span>2001:0db8:85a3:0000:0000:8a2e:0370:7334</span> is a valid IPV6',
        incorrect: '<span>192.168.0.1</span> is not a valid IPV6',
        description: 'Used for IPV6 fields'
    },
    uuid: {
        info: 'Enter a valid/invalid UUID (Universally Unique IDentifier) to test. For example:',
        correct:
            '<span>f47ac10b-58cc-4372-a567-0e02b2c3d479</span> is a valid UUID',
        incorrect:
            '<span>123e4567-e89b-12d3-a456-42665544000</span> is not a valid UUID',
        description: 'Used for UUID (Universally Unique IDentifier) fields'
    },
    guid: {
        info: 'Enter a valid/invalid GUID (Globally unique identifier) to test. For example:',
        correct:
            '<span>3f2504e0-4f89-11d3-9a0c-0305e82c3301</span> is a valid GUID',
        incorrect:
            '<span>f47ac10b58cc4372a5670e02b2c3d479</span> is not a valid GUID',
        description: 'Used for GUID (Globally unique identifier) fields'
    },
    ssn: {
        info: 'Enter a valid/invalid Social Security number to test. For example:',
        correct: '<span>123-45-6789</span> is a valid Social Security number',
        incorrect:
            '<span>123456789</span> is not a valid Social Security number',
        description: 'Used for Social Security number fields'
    },
    ein: {
        info: 'Enter a valid/invalid Employer Identification Number (EIN) to test. A valid EIN consists of 9 digits. For example:',
        correct: '<span>123456789</span> is a valid EIN.',
        incorrect: '<span>123-45-6789</span> is not a valid EIN.',
        description:
            'Used for validating Employer Identification Numbers (EIN). An EIN is considered valid if it consists of 9 digits.'
    },
    itin: {
        info: "Enter a valid/invalid Individual Taxpayer Identification Number (ITIN) to test. A valid ITIN consists of 9 digits in the format '123-45-6789'. For example:",
        correct: '<span>123-45-6789</span> is a valid ITIN.',
        incorrect: '<span>123456789</span> is not a valid ITIN.',
        description:
            "Used for validating Individual Taxpayer Identification Numbers (ITIN). An ITIN is considered valid if it consists of 9 digits in the '123-45-6789' format."
    },
    atin: {
        info: "Enter a valid/invalid Taxpayer Identification Number for Pending U.S. Adoptions (ATIN) to test. A valid ATIN consists of 9 digits in the format '123-45-6789'. For example:",
        correct: '<span>123-45-6789</span> is a valid ATIN.',
        incorrect: '<span>123456789</span> is not a valid ATIN.',
        description:
            "Used for validating Taxpayer Identification Numbers for Pending U.S. Adoptions (ATIN). An ATIN is considered valid if it consists of 9 digits in the '123-45-6789' format."
    },
    ptin: {
        info: "Enter a valid/invalid Preparer Taxpayer Identification Number (PTIN) to test. A valid PTIN consists of 9 digits in the format '12345-6789'. For example:",
        correct: '<span>12345-6789</span> is a valid PTIN.',
        incorrect: '<span>123456789</span> is not a valid PTIN.',
        description:
            "Used for validating Preparer Taxpayer Identification Numbers (PTIN). A PTIN is considered valid if it consists of 9 digits in the '12345-6789' format."
    },
    ascii: {
        info: 'Enter a valid/invalid ASCII string to test. A valid ASCII string contains only ASCII characters (0x00-0x7F). For example:',
        correct: '<span>HelloWorld123</span> is a valid ASCII string.',
        incorrect: '<span>你好，世界</span> is not a valid ASCII string.',
        description:
            'Used for validating ASCII strings. An ASCII string is considered valid if it contains only ASCII characters (0x00-0x7F).'
    },
    base32: {
        info: 'Enter a valid/invalid Base32 string to test. A valid Base32 string consists of uppercase letters and digits, with optional padding. For example:',
        correct: '<span>ABCD1234====</span> is a valid Base32 string.',
        incorrect: '<span>abcdefg1234</span> is not a valid Base32 string.',
        description:
            'Used for validating Base32 strings. A Base32 string is considered valid if it consists of uppercase letters and digits with optional padding.'
    },
    base58: {
        info: 'Enter a valid/invalid Base58 string to test. A valid Base58 string consists of characters from a specific set. For example:',
        correct:
            '<span>5KdW1YfZv3BFe3aPdWxk6LDW1vYLu6K8tkKw84bFS4e56m3q2E</span> is a valid Base58 string.',
        incorrect: '<span>abc123!@#</span> is not a valid Base58 string.',
        description:
            'Used for validating Base58 strings. A Base58 string is considered valid if it consists of characters from a specific set.'
    },
    base64: {
        info: "Enter a valid/invalid Base64 string to test. A valid Base64 string consists of uppercase letters, digits, '_', and '-'. For example:",
        correct: '<span>SGVsbG8gV29ybGQgMTIz</span> is a valid Base64 string.',
        incorrect: '<span>你好，世界</span> is not a valid Base64 string.',
        description:
            "Used for validating Base64 strings. A Base64 string is considered valid if it consists of uppercase letters, digits, '_', and '-'."
    },
    bic: {
        info: 'Enter a valid/invalid Bank Identifier Code (BIC) to test. A valid BIC consists of 8 or 11 characters, including uppercase letters and digits. For example:',
        correct: '<span>ABCD1234</span> is a valid BIC.',
        incorrect: '<span>AB-C1234</span> is not a valid BIC.',
        description:
            'Used for validating Bank Identifier Codes (BIC). A BIC is considered valid if it consists of 8 or 11 characters, including uppercase letters and digits.'
    },
    'btc-address': {
        info: "Enter a valid/invalid Bitcoin address to test. A valid Bitcoin address starts with 'bc1' or '1' and contains a specific set of characters. For example:",
        correct:
            '<span>bc1qwert56789abcdefg</span> is a valid Bitcoin address.',
        incorrect:
            '<span>12345678901234567890</span> is not a valid Bitcoin address.',
        description:
            "Used for validating Bitcoin addresses. A Bitcoin address is considered valid if it starts with 'bc1' or '1' and contains specific characters."
    },
    currency: {
        info: 'Enter a valid/invalid currency amount to test. A valid currency amount may start with a currency symbol (e.g., $, €, £, ¥) and may include commas and up to two decimal places. For example:',
        correct: '<span>$1,234.56</span> is a valid currency amount.',
        incorrect: '<span>12345,67.890</span> is not a valid currency amount.',
        description:
            'Used for validating currency amounts. A currency amount is considered valid if it follows the specified format.'
    },
    ean: {
        info: 'Enter a valid/invalid International Article Number (EAN) to test. A valid EAN consists of 8, 13, or 14 digits. For example:',
        correct: '<span>12345678</span> is a valid EAN.',
        incorrect: '<span>12345-6789</span> is not a valid EAN.',
        description:
            'Used for validating International Article Numbers (EAN). An EAN is considered valid if it consists of 8, 13, or 14 digits.'
    },
    jan: {
        info: 'Enter a valid/invalid Japanese Article Number (JAN) to test. A valid JAN consists of 13 digits. For example:',
        correct: '<span>1234567890123</span> is a valid JAN.',
        incorrect: '<span>1234567890123456</span> is not a valid JAN.',
        description:
            'Used for validating Japanese Article Numbers (JAN). A JAN is considered valid if it consists of 13 digits.'
    },
    'ean-8': {
        info: 'Enter a valid/invalid EAN-8 to test. A valid EAN-8 consists of 8 digits. For example:',
        correct: '<span>12345678</span> is a valid EAN-8.',
        incorrect: '<span>123456789</span> is not a valid EAN-8.',
        description:
            'Used for validating EAN-8. An EAN-8 is considered valid if it consists of 8 digits.'
    },
    'ean-13': {
        info: 'Enter a valid/invalid EAN-13 to test. A valid EAN-13 consists of 13 digits. For example:',
        correct: '<span>1234567890123</span> is a valid EAN-13.',
        incorrect: '<span>1234567890123456</span> is not a valid EAN-13.',
        description:
            'Used for validating EAN-13. An EAN-13 is considered valid if it consists of 13 digits.'
    },
    'ean-14': {
        info: 'Enter a valid/invalid EAN-14 to test. A valid EAN-14 consists of 14 digits. For example:',
        correct: '<span>12345678901234</span> is a valid EAN-14.',
        incorrect: '<span>1234567890123456</span> is not a valid EAN-14.',
        description:
            'Used for validating EAN-14. An EAN-14 is considered valid if it consists of 14 digits.'
    },
    'eth-address': {
        info: "Enter a valid/invalid Ethereum address to test. A valid Ethereum address starts with '0x' and contains 40 hexadecimal characters. For example:",
        correct:
            '<span>0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</span> is a valid Ethereum address.',
        incorrect: '<span>12345ABC</span> is not a valid Ethereum address.',
        description:
            "Used for validating Ethereum addresses. An Ethereum address is considered valid if it starts with '0x' and consists of 40 hexadecimal characters."
    },
    fqdn: {
        info: 'Enter a valid/invalid Fully Qualified Domain Name (FQDN) to test. A valid FQDN consists of lowercase letters, digits, hyphens, and dots, and must be in a specific format. For example:',
        correct: '<span>example.com</span> is a valid FQDN.',
        incorrect: '<span>Invalid@Domain</span> is not a valid FQDN.',
        description:
            'Used for validating Fully Qualified Domain Names (FQDN). An FQDN is considered valid if it follows the specified format.'
    },
    'hex-color': {
        info: "Enter a valid/invalid hexadecimal color code to test. A valid hexadecimal color code starts with '#' and contains 3, 4, 6, or 8 hexadecimal characters. For example:",
        correct: '<span>#FFA500</span> is a valid hexadecimal color code.',
        incorrect: '<span>123456</span> is not a valid hexadecimal color code.',
        description:
            "Used for validating hexadecimal color codes. A hexadecimal color code is considered valid if it starts with '#' and contains 3, 4, 6, or 8 hexadecimal characters."
    },
    hsl: {
        info: 'Enter a valid/invalid HSL color value to test. A valid HSL color value consists of hue, saturation, and lightness values in a specific format. For example:',
        correct: '<span>hsl(120, 100%, 50%)</span> is a valid HSL color value.',
        incorrect: '<span>hsl(180, 50)</span> is not a valid HSL color value.',
        description:
            'Used for validating HSL color values. An HSL color value is considered valid if it follows the specified format.'
    },
    'hsl-comma': {
        info: 'Enter a valid/invalid HSL color value (comma-separated) to test. A valid HSL color value (comma-separated) consists of hue, saturation, and lightness values in a specific format. For example:',
        correct:
            '<span>hsl(120, 100%, 50%)</span> is a valid HSL color value (comma-separated).',
        incorrect:
            '<span>hsl(180, 50)</span> is not a valid HSL color value (comma-separated).',
        description:
            'Used for validating HSL color values in a comma-separated format. An HSL color value (comma-separated) is considered valid if it follows the specified format.'
    },
    'hsl-space': {
        info: 'Enter a valid/invalid HSL color value (space-separated) to test. A valid HSL color value (space-separated) consists of hue, saturation, and lightness values in a specific format. For example:',
        correct:
            '<span>hsl(120 100% 50%)</span> is a valid HSL color value (space-separated).',
        incorrect:
            '<span>hsl(180 50)</span> is not a valid HSL color value (space-separated).',
        description:
            'Used for validating HSL color values in a space-separated format. An HSL color value (space-separated) is considered valid if it follows the specified format.'
    },
    imei: {
        info: 'Enter a valid/invalid International Mobile Equipment Identity (IMEI) number to test. A valid IMEI consists of 15 digits. For example:',
        correct: '<span>123456789012345</span> is a valid IMEI.',
        incorrect: '<span>1234567890123456</span> is not a valid IMEI.',
        description:
            'Used for validating International Mobile Equipment Identity (IMEI) numbers. An IMEI is considered valid if it consists of 15 digits.'
    },
    'imei-hyphen': {
        info: "Enter a valid/invalid IMEI number with hyphens to test. A valid IMEI with hyphens consists of 15 digits in the format '12-345678-901234-5'. For example:",
        correct:
            '<span>12-345678-901234-5</span> is a valid IMEI with hyphens.',
        incorrect:
            '<span>123-456789-012345-6</span> is not a valid IMEI with hyphens.',
        description:
            "Used for validating IMEI numbers with hyphens. An IMEI with hyphens is considered valid if it consists of 15 digits in the '12-345678-901234-5' format."
    },
    'isbn-10': {
        info: "Enter a valid/invalid ISBN-10 to test. A valid ISBN-10 consists of 10 digits, which may end with 'X'. For example:",
        correct: '<span>1234567890</span> is a valid ISBN-10.',
        incorrect: '<span>123-4567890</span> is not a valid ISBN-10.',
        description:
            "Used for validating ISBN-10. An ISBN-10 is considered valid if it consists of 10 digits, which may end with 'X'."
    },
    'isbn-13': {
        info: 'Enter a valid/invalid ISBN-13 to test. A valid ISBN-13 consists of 13 digits, with hyphens in specific positions. For example:',
        correct: '<span>978-1234567890</span> is a valid ISBN-13.',
        incorrect: '<span>123-456-7890</span> is not a valid ISBN-13.',
        description:
            'Used for validating ISBN-13. An ISBN-13 is considered valid if it consists of 13 digits with hyphens in specific positions.'
    },
    isin: {
        info: 'Enter a valid/invalid International Securities Identification Number (ISIN) to test. A valid ISIN consists of 12 characters starting with two uppercase letters and ending with a digit. For example:',
        correct: '<span>US1234567890</span> is a valid ISIN.',
        incorrect: '<span>123-45-6789-0</span> is not a valid ISIN.',
        description:
            'Used for validating International Securities Identification Numbers (ISIN). An ISIN is considered valid if it consists of 12 characters following the specified pattern.'
    },
    isrc: {
        info: 'Enter a valid/invalid International Standard Recording Code (ISRC) to test. A valid ISRC consists of two uppercase letters, three alphanumeric characters, and five digits. For example:',
        correct: '<span>US-ABC12-34567</span> is a valid ISRC.',
        incorrect: '<span>ABC12345</span> is not a valid ISRC.',
        description:
            'Used for validating International Standard Recording Codes (ISRC). An ISRC is considered valid if it consists of two uppercase letters, three alphanumeric characters, and five digits.'
    },
    jwt: {
        info: 'Enter a valid/invalid JSON Web Token (JWT) to test. A valid JWT consists of three parts separated by periods. For example:',
        correct:
            '<span>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span> is a valid JWT.',
        incorrect: '<span>12345ABC</span> is not a valid JWT.',
        description:
            'Used for validating JSON Web Tokens (JWT). A JWT is considered valid if it consists of three parts separated by periods.'
    },
    lat: {
        info: 'Enter a valid/invalid latitude value to test. A valid latitude value ranges from -90 to 90 degrees. For example:',
        correct: '<span>45.6789</span> is a valid latitude value.',
        incorrect: '<span>123.4567</span> is not a valid latitude value.',
        description:
            'Used for validating latitude values. A latitude value is considered valid if it falls within the range of -90 to 90 degrees.'
    },
    long: {
        info: 'Enter a valid/invalid longitude value to test. A valid longitude value ranges from -180 to 180 degrees. For example:',
        correct: '<span>-123.4567</span> is a valid longitude value.',
        incorrect: '<span>200.1234</span> is not a valid longitude value.',
        description:
            'Used for validating longitude values. A longitude value is considered valid if it falls within the range of -180 to 180 degrees.'
    },
    port: {
        info: 'Enter a valid/invalid port number to test. A valid port number ranges from 0 to 65535. For example:',
        correct: '<span>8080</span> is a valid port number.',
        incorrect: '<span>65536</span> is not a valid port number.',
        description:
            'Used for validating port numbers. A port number is considered valid if it falls within the range of 0 to 65535.'
    },
    'postal-code-af': {
        info: 'Enter a valid/invalid Afghan postal code to test. A valid Afghan postal code consists of numeric characters within specified ranges. For example:',
        correct: '<span>1001-1016</span> is a valid Afghan postal code.',
        incorrect: '<span>5000</span> is not a valid Afghan postal code.',
        description:
            'Used for validating Afghan postal codes. An Afghan postal code is considered valid if it falls within the specified numeric ranges.'
    },
    'postal-code-ax': {
        info: "Enter a valid/invalid Åland Islands postal code to test. A valid Åland Islands postal code consists of numeric characters in the format '22xxx'. For example:",
        correct: '<span>22345</span> is a valid Åland Islands postal code.',
        incorrect:
            '<span>1234</span> is not a valid Åland Islands postal code.',
        description:
            'Used for validating Åland Islands postal codes. An Åland Islands postal code is considered valid if it follows the specified format.'
    },
    'postal-code-al': {
        info: 'Enter a valid/invalid Albanian postal code to test. A valid Albanian postal code consists of 4 numeric digits. For example:',
        correct: '<span>1234</span> is a valid Albanian postal code.',
        incorrect: '<span>12-34</span> is not a valid Albanian postal code.',
        description:
            'Used for validating Albanian postal codes. An Albanian postal code is considered valid if it consists of 4 numeric digits.'
    },
    'postal-code-dz': {
        info: 'Enter a valid/invalid Algerian postal code to test. A valid Algerian postal code follows specific numeric patterns. For example:',
        correct: '<span>12000</span> is a valid Algerian postal code.',
        incorrect: '<span>AB123</span> is not a valid Algerian postal code.',
        description:
            'Used for validating Algerian postal codes. An Algerian postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-as': {
        info: 'Enter a valid/invalid American Samoa postal code to test. A valid American Samoa postal code consists of 5 digits, optionally followed by a hyphen and 4 more digits. For example:',
        correct: '<span>96799</span> is a valid American Samoa postal code.',
        incorrect:
            '<span>AS12345</span> is not a valid American Samoa postal code.',
        description:
            'Used for validating American Samoa postal codes. An American Samoa postal code is considered valid if it follows the specified format.'
    },
    'postal-code-ad': {
        info: "Enter a valid/invalid Andorran postal code to test. A valid Andorran postal code consists of 'AD' followed by three digits. For example:",
        correct: '<span>AD123</span> is a valid Andorran postal code.',
        incorrect: '<span>12345</span> is not a valid Andorran postal code.',
        description:
            "Used for validating Andorran postal codes. An Andorran postal code is considered valid if it consists of 'AD' followed by three digits."
    },
    'postal-code-ao': null,
    'postal-code-ai': {
        info: "Enter a valid/invalid Anguilla postal code to test. A valid Anguilla postal code consists of 'AI-' followed by 2640. For example:",
        correct: '<span>AI-2640</span> is a valid Anguilla postal code.',
        incorrect: '<span>AI-1234</span> is not a valid Anguilla postal code.',
        description:
            "Used for validating Anguilla postal codes. An Anguilla postal code is considered valid if it consists of 'AI-' followed by 2640."
    },
    'postal-code-ag': null,
    'postal-code-ar': {
        info: 'Enter a valid/invalid Argentine postal code to test. A valid Argentine postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Argentine postal code.',
        incorrect: '<span>ABCD</span> is not a valid Argentine postal code.',
        description:
            'Used for validating Argentine postal codes. An Argentine postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-am': {
        info: 'Enter a valid/invalid Armenian postal code to test. A valid Armenian postal code follows specific numeric patterns. For example:',
        correct: '<span>0412</span> is a valid Armenian postal code.',
        incorrect: '<span>12345</span> is not a valid Armenian postal code.',
        description:
            'Used for validating Armenian postal codes. An Armenian postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-aw': null,
    'postal-code-ac': {
        info: "Enter a valid/invalid Ascension Island postal code to test. A valid Ascension Island postal code consists of 'ASCN 1ZZ'. For example:",
        correct:
            '<span>ASCN 1ZZ</span> is a valid Ascension Island postal code.',
        incorrect:
            '<span>12345</span> is not a valid Ascension Island postal code.',
        description:
            "Used for validating Ascension Island postal codes. An Ascension Island postal code is considered valid if it consists of 'ASCN 1ZZ'."
    },
    'postal-code-au': {
        info: 'Enter a valid/invalid Australian postal code to test. A valid Australian postal code consists of 4 or more digits. For example:',
        correct: '<span>1234</span> is a valid Australian postal code.',
        incorrect:
            '<span>AU-1234</span> is not a valid Australian postal code.',
        description:
            'Used for validating Australian postal codes. An Australian postal code is considered valid if it consists of 4 or more digits.'
    },
    'postal-code-at': {
        info: 'Enter a valid/invalid Austrian postal code to test. A valid Austrian postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Austrian postal code.',
        incorrect: '<span>AT1234</span> is not a valid Austrian postal code.',
        description:
            'Used for validating Austrian postal codes. An Austrian postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-az': {
        info: 'Enter a valid/invalid Azerbaijani postal code to test. A valid Azerbaijani postal code consists of numeric characters in specific patterns. For example:',
        correct: '<span>AZ 1234</span> is a valid Azerbaijani postal code.',
        incorrect:
            '<span>AZ-1234</span> is not a valid Azerbaijani postal code.',
        description:
            'Used for validating Azerbaijani postal codes. An Azerbaijani postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-bs': null,
    'postal-code-bh': {
        info: 'Enter a valid/invalid Bahraini postal code to test. A valid Bahraini postal code consists of 5 digits. For example:',
        correct: '<span>12345</span> is a valid Bahraini postal code.',
        incorrect: '<span>BH-1234</span> is not a valid Bahraini postal code.',
        description:
            'Used for validating Bahraini postal codes. A Bahraini postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-bd': {
        info: 'Enter a valid/invalid Bangladeshi postal code to test. A valid Bangladeshi postal code follows specific numeric patterns. For example:',
        correct: '<span>1234</span> is a valid Bangladeshi postal code.',
        incorrect:
            '<span>BD-12345</span> is not a valid Bangladeshi postal code.',
        description:
            'Used for validating Bangladeshi postal codes. A Bangladeshi postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-bb': {
        info: "Enter a valid/invalid Barbadian postal code to test. A valid Barbadian postal code consists of 'BB' followed by 5 digits. For example:",
        correct: '<span>BB12345</span> is a valid Barbadian postal code.',
        incorrect: '<span>1234</span> is not a valid Barbadian postal code.',
        description:
            "Used for validating Barbadian postal codes. A Barbadian postal code is considered valid if it consists of 'BB' followed by 5 digits."
    },
    'postal-code-by': {
        info: 'Enter a valid/invalid Belarusian postal code to test. A valid Belarusian postal code follows specific numeric patterns. For example:',
        correct: '<span>220000</span> is a valid Belarusian postal code.',
        incorrect:
            '<span>BY-12345</span> is not a valid Belarusian postal code.',
        description:
            'Used for validating Belarusian postal codes. A Belarusian postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-be': {
        info: 'Enter a valid/invalid Belgian postal code to test. A valid Belgian postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Belgian postal code.',
        incorrect: '<span>BE-1234</span> is not a valid Belgian postal code.',
        description:
            'Used for validating Belgian postal codes. A Belgian postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-bz': null,
    'postal-code-bj': {
        info: 'Enter a valid/invalid Beninese postal code to test. A valid Beninese postal code consists of 6 digits. For example:',
        correct: '<span>123456</span> is a valid Beninese postal code.',
        incorrect: '<span>BJ-12345</span> is not a valid Beninese postal code.',
        description:
            'Used for validating Beninese postal codes. A Beninese postal code is considered valid if it consists of 6 digits.'
    },
    'postal-code-bm': {
        info: 'Enter a valid/invalid Bermudian postal code to test. A valid Bermudian postal code consists of 2 uppercase letters followed by 2 digits. For example:',
        correct: '<span>BM A1</span> is a valid Bermudian postal code.',
        incorrect: '<span>12345</span> is not a valid Bermudian postal code.',
        description:
            'Used for validating Bermudian postal codes. A Bermudian postal code is considered valid if it consists of 2 uppercase letters followed by 2 digits.'
    },
    'postal-code-bt': {
        info: 'Enter a valid/invalid Bhutanese postal code to test. A valid Bhutanese postal code follows specific numeric patterns. For example:',
        correct: '<span>12001</span> is a valid Bhutanese postal code.',
        incorrect:
            '<span>BT-12345</span> is not a valid Bhutanese postal code.',
        description:
            'Used for validating Bhutanese postal codes. A Bhutanese postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-bo': null,
    'postal-code-ba': {
        info: 'Enter a valid/invalid Bosnian postal code to test. A valid Bosnian postal code consists of 5 digits. For example:',
        correct: '<span>70000</span> is a valid Bosnian postal code.',
        incorrect: '<span>BA-12345</span> is not a valid Bosnian postal code.',
        description:
            'Used for validating Bosnian postal codes. A Bosnian postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-bw': null,
    'postal-code-bv': null,
    'postal-code-br': {
        info: 'Enter a valid/invalid Brazilian postal code to test. A valid Brazilian postal code consists of 5 digits, optionally followed by a hyphen and 3 more digits. For example:',
        correct: '<span>12345-678</span> is a valid Brazilian postal code.',
        incorrect: '<span>BR12345</span> is not a valid Brazilian postal code.',
        description:
            'Used for validating Brazilian postal codes. A Brazilian postal code is considered valid if it follows the specified format.'
    },
    'postal-code-io': {
        info: "Enter a valid/invalid British Indian Ocean Territory postal code to test. A valid British Indian Ocean Territory postal code consists of 'BBND 1ZZ'. For example:",
        correct:
            '<span>BBND 1ZZ</span> is a valid British Indian Ocean Territory postal code.',
        incorrect:
            '<span>12345</span> is not a valid British Indian Ocean Territory postal code.',
        description:
            "Used for validating British Indian Ocean Territory postal codes. A British Indian Ocean Territory postal code is considered valid if it consists of 'BBND 1ZZ'."
    },
    'postal-code-vg': {
        info: 'Enter a valid/invalid British Virgin Islands postal code to test. A valid British Virgin Islands postal code follows specific patterns. For example:',
        correct:
            '<span>VG1110</span> is a valid British Virgin Islands postal code.',
        incorrect:
            '<span>VG-1234</span> is not a valid British Virgin Islands postal code.',
        description:
            'Used for validating British Virgin Islands postal codes. A British Virgin Islands postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-bn': {
        info: 'Enter a valid/invalid Bruneian postal code to test. A valid Bruneian postal code follows specific alphanumeric patterns. For example:',
        correct: '<span>BW1234</span> is a valid Bruneian postal code.',
        incorrect: '<span>B-N1234</span> is not a valid Bruneian postal code.',
        description:
            'Used for validating Bruneian postal codes. A Bruneian postal code is considered valid if it follows the specified alphanumeric patterns.'
    },
    'postal-code-bg': {
        info: 'Enter a valid/invalid Bulgarian postal code to test. A valid Bulgarian postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Bulgarian postal code.',
        incorrect:
            '<span>BG-12345</span> is not a valid Bulgarian postal code.',
        description:
            'Used for validating Bulgarian postal codes. A Bulgarian postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-bf': {
        info: 'Enter a valid/invalid Burkinabe postal code to test. A valid Burkinabe postal code consists of 5 digits. For example:',
        correct: '<span>12345</span> is a valid Burkinabe postal code.',
        incorrect: '<span>BF-1234</span> is not a valid Burkinabe postal code.',
        description:
            'Used for validating Burkinabe postal codes. A Burkinabe postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-bi': null,
    'postal-code-kh': {
        info: 'Enter a valid/invalid Cambodian postal code to test. A valid Cambodian postal code follows specific numeric patterns. For example:',
        correct: '<span>12345</span> is a valid Cambodian postal code.',
        incorrect: '<span>1234567</span> is not a valid Cambodian postal code.',
        description:
            'Used for validating Cambodian postal codes. A Cambodian postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-cm': null,
    'postal-code-ca': {
        info: 'Enter a valid/invalid Canadian postal code to test. A valid Canadian postal code consists of specific alphanumeric patterns. For example:',
        correct: '<span>A1A 1A1</span> is a valid Canadian postal code.',
        incorrect: '<span>12345</span> is not a valid Canadian postal code.',
        description:
            'Used for validating Canadian postal codes. A Canadian postal code is considered valid if it follows the specified alphanumeric patterns.'
    },
    'postal-code-cv': {
        info: 'Enter a valid/invalid Cape Verdean postal code to test. A valid Cape Verdean postal code follows specific numeric patterns. For example:',
        correct: '<span>1111</span> is a valid Cape Verdean postal code.',
        incorrect:
            '<span>CV-12345</span> is not a valid Cape Verdean postal code.',
        description:
            'Used for validating Cape Verdean postal codes. A Cape Verdean postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-cy': {
        info: 'Enter a valid/invalid Cypriot postal code to test. A valid Cypriot postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Cypriot postal code.',
        incorrect: '<span>CY-12345</span> is not a valid Cypriot postal code.',
        description:
            'Used for validating Cypriot postal codes. A Cypriot postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-ck': null,
    'postal-code-cr': {
        info: 'Enter a valid/invalid Costa Rican postal code to test. A valid Costa Rican postal code consists of 5 digits, optionally followed by a hyphen and 4 more digits. For example:',
        correct: '<span>12345</span> is a valid Costa Rican postal code.',
        incorrect:
            '<span>CR-1234</span> is not a valid Costa Rican postal code.',
        description:
            'Used for validating Costa Rican postal codes. A Costa Rican postal code is considered valid if it follows the specified format.'
    },
    'postal-code-hr': {
        info: 'Enter a valid/invalid Croatian postal code to test. A valid Croatian postal code consists of 5 digits. For example:',
        correct: '<span>12345</span> is a valid Croatian postal code.',
        incorrect: '<span>HR-1234</span> is not a valid Croatian postal code.',
        description:
            'Used for validating Croatian postal codes. A Croatian postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-cu': {
        info: 'Enter a valid/invalid Cuban postal code to test. A valid Cuban postal code follows specific numeric patterns. For example:',
        correct: '<span>12345</span> is a valid Cuban postal code.',
        incorrect: '<span>CU-1234</span> is not a valid Cuban postal code.',
        description:
            'Used for validating Cuban postal codes. A Cuban postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-cw': null,
    'postal-code-cl': {
        info: 'Enter a valid/invalid Chilean postal code to test. A valid Chilean postal code consists of numeric characters. For example:',
        correct: '<span>1230000</span> is a valid Chilean postal code.',
        incorrect: '<span>CL-12345</span> is not a valid Chilean postal code.',
        description:
            'Used for validating Chilean postal codes. A Chilean postal code is considered valid if it consists of numeric characters in a specific pattern.'
    },
    'postal-code-co': {
        info: 'Enter a valid/invalid Colombian postal code to test. A valid Colombian postal code consists of 6 digits. For example:',
        correct: '<span>123456</span> is a valid Colombian postal code.',
        incorrect:
            '<span>CO-12345</span> is not a valid Colombian postal code.',
        description:
            'Used for validating Colombian postal codes. A Colombian postal code is considered valid if it consists of 6 digits.'
    },
    'postal-code-cn': {
        info: "Enter a valid/invalid Chinese postal code to test. A valid Chinese postal code consists of 6 digits and cannot be '000000'. For example:",
        correct: '<span>123456</span> is a valid Chinese postal code.',
        incorrect: '<span>000000</span> is not a valid Chinese postal code.',
        description:
            "Used for validating Chinese postal codes. A Chinese postal code is considered valid if it consists of 6 digits and is not '000000'."
    },
    'postal-code-cx': {
        info: "Enter a valid/invalid Christmas Island postal code to test. A valid Christmas Island postal code consists of 5 digits starting with '5'. For example:",
        correct: '<span>51234</span> is a valid Christmas Island postal code.',
        incorrect:
            '<span>12345</span> is not a valid Christmas Island postal code.',
        description:
            "Used for validating Christmas Island postal codes. A Christmas Island postal code is considered valid if it starts with '5' and consists of 5 digits."
    },
    'postal-code-cz': {
        info: 'Enter a valid/invalid Czech postal code to test. A valid Czech postal code consists of 5 digits and follows specific patterns. For example:',
        correct: '<span>12345</span> is a valid Czech postal code.',
        incorrect: '<span>CZ-12345</span> is not a valid Czech postal code.',
        description:
            'Used for validating Czech postal codes. A Czech postal code is considered valid if it consists of 5 digits and follows the specified patterns.'
    },
    'postal-code-dk': {
        info: 'Enter a valid/invalid Danish postal code to test. A valid Danish postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Danish postal code.',
        incorrect: '<span>DK-12345</span> is not a valid Danish postal code.',
        description:
            'Used for validating Danish postal codes. A Danish postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-dj': null,
    'postal-code-dm': null,
    'postal-code-do': {
        info: 'Enter a valid/invalid Dominican postal code to test. A valid Dominican postal code follows specific numeric patterns. For example:',
        correct: '<span>12345</span> is a valid Dominican postal code.',
        incorrect: '<span>DO-1234</span> is not a valid Dominican postal code.',
        description:
            'Used for validating Dominican postal codes. A Dominican postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-tl': null,
    'postal-code-ec': {
        info: 'Enter a valid/invalid Ecuadorian postal code to test. A valid Ecuadorian postal code follows specific numeric patterns. For example:',
        correct: '<span>12345</span> is a valid Ecuadorian postal code.',
        incorrect:
            '<span>EC-1234</span> is not a valid Ecuadorian postal code.',
        description:
            'Used for validating Ecuadorian postal codes. An Ecuadorian postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-eg': {
        info: 'Enter a valid/invalid Egyptian postal code to test. A valid Egyptian postal code consists of 5 digits. For example:',
        correct: '<span>12345</span> is a valid Egyptian postal code.',
        incorrect: '<span>123456</span> is not a valid Egyptian postal code.',
        description:
            'Used for validating Egyptian postal codes. An Egyptian postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-sv': {
        info: 'Enter a valid/invalid Salvadoran postal code to test. A valid Salvadoran postal code follows specific numeric patterns. For example:',
        correct: '<span>1234</span> is a valid Salvadoran postal code.',
        incorrect:
            '<span>SV-12345</span> is not a valid Salvadoran postal code.',
        description:
            'Used for validating Salvadoran postal codes. A Salvadoran postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-gq': null,
    'postal-code-er': null,
    'postal-code-ee': {
        info: 'Enter a valid/invalid Estonian postal code to test. A valid Estonian postal code consists of 5 digits. For example:',
        correct: '<span>12345</span> is a valid Estonian postal code.',
        incorrect: '<span>EE-1234</span> is not a valid Estonian postal code.',
        description:
            'Used for validating Estonian postal codes. An Estonian postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-et': {
        info: 'Enter a valid/invalid Ethiopian postal code to test. A valid Ethiopian postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Ethiopian postal code.',
        incorrect:
            '<span>ET-12345</span> is not a valid Ethiopian postal code.',
        description:
            'Used for validating Ethiopian postal codes. An Ethiopian postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-fo': {
        info: 'Enter a valid/invalid Faroese postal code to test. A valid Faroese postal code consists of 3 digits. For example:',
        correct: '<span>123</span> is a valid Faroese postal code.',
        incorrect: '<span>FO-1234</span> is not a valid Faroese postal code.',
        description:
            'Used for validating Faroese postal codes. A Faroese postal code is considered valid if it consists of 3 digits.'
    },
    'postal-code-fk': {
        info: "Enter a valid/invalid Falkland Islands postal code to test. A valid Falkland Islands postal code follows specific patterns, such as 'FIQQ 1ZZ' or 'SIQQ 1ZZ'. For example:",
        correct:
            '<span>FIQQ 1ZZ</span> is a valid Falkland Islands postal code.',
        incorrect:
            '<span>FK-12345</span> is not a valid Falkland Islands postal code.',
        description:
            'Used for validating Falkland Islands postal codes. A Falkland Islands postal code is considered valid if it follows the specified patterns.'
    },
    'postal-code-fj': null,
    'postal-code-fi': {
        info: 'Enter a valid/invalid Finnish postal code to test. A valid Finnish postal code consists of 5 digits. For example:',
        correct: '<span>12345</span> is a valid Finnish postal code.',
        incorrect: '<span>FI-1234</span> is not a valid Finnish postal code.',
        description:
            'Used for validating Finnish postal codes. A Finnish postal code is considered valid if it consists of 5 digits.'
    },
    'postal-code-fr': {
        info: "Enter a valid/invalid French postal code to test. A valid French postal code follows specific numeric patterns and may include 'CEDEX'. For example:",
        correct: '<span>12345</span> is a valid French postal code.',
        incorrect: '<span>FR-1234</span> is not a valid French postal code.',
        description:
            "Used for validating French postal codes. A French postal code is considered valid if it follows the specified numeric patterns and may include 'CEDEX' followed by digits."
    },
    'postal-code-gf': {
        info: "Enter a valid/invalid French Guiana postal code to test. A valid French Guiana postal code consists of 5 digits, and 'CEDEX' may be followed by '1' or '2'. For example:",
        correct: '<span>97300</span> is a valid French Guiana postal code.',
        incorrect:
            '<span>GF-12345</span> is not a valid French Guiana postal code.',
        description:
            "Used for validating French Guiana postal codes. A French Guiana postal code is considered valid if it consists of 5 digits, and 'CEDEX' may be followed by '1' or '2'."
    },
    'postal-code-pf': {
        info: "Enter a valid/invalid French Polynesia postal code to test. A valid French Polynesia postal code consists of 5 digits and starts with '987'. For example:",
        correct: '<span>98799</span> is a valid French Polynesia postal code.',
        incorrect:
            '<span>PF-12345</span> is not a valid French Polynesia postal code.',
        description:
            "Used for validating French Polynesia postal codes. A French Polynesia postal code is considered valid if it consists of 5 digits and starts with '987'."
    },
    'postal-code-tf': null,
    'postal-code-ga': null,
    'postal-code-gm': null,
    'postal-code-ge': {
        info: 'Enter a valid/invalid Georgian postal code to test. A valid Georgian postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Georgian postal code.',
        incorrect: '<span>GE-12345</span> is not a valid Georgian postal code.',
        description:
            'Used for validating Georgian postal codes. A Georgian postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-de': {
        info: 'Enter a valid/invalid German postal code to test. A valid German postal code follows specific numeric patterns. For example:',
        correct: '<span>12345</span> is a valid German postal code.',
        incorrect: '<span>DE-1234</span> is not a valid German postal code.',
        description:
            'Used for validating German postal codes. A German postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-gh': null,
    'postal-code-gi': {
        info: "Enter a valid/invalid Gibraltar postal code to test. A valid Gibraltar postal code follows the pattern 'GX11 1AA'. For example:",
        correct: '<span>GX11 1AA</span> is a valid Gibraltar postal code.',
        incorrect:
            '<span>GI-12345</span> is not a valid Gibraltar postal code.',
        description:
            "Used for validating Gibraltar postal codes. A Gibraltar postal code is considered valid if it follows the pattern 'GX11 1AA'."
    },
    'postal-code-gr': {
        info: 'Enter a valid/invalid Greek postal code to test. A valid Greek postal code follows specific numeric patterns. For example:',
        correct: '<span>12345</span> is a valid Greek postal code.',
        incorrect: '<span>GR-1234</span> is not a valid Greek postal code.',
        description:
            'Used for validating Greek postal codes. A Greek postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-gl': {
        info: "Enter a valid/invalid Greenland postal code to test. A valid Greenland postal code consists of 3 digits and starts with '39'. For example:",
        correct: '<span>390</span> is a valid Greenland postal code.',
        incorrect: '<span>GL-1234</span> is not a valid Greenland postal code.',
        description:
            "Used for validating Greenland postal codes. A Greenland postal code is considered valid if it consists of 3 digits and starts with '39'."
    },
    'postal-code-gd': null,
    'postal-code-gp': {
        info: "Enter a valid/invalid Guadeloupe postal code to test. A valid Guadeloupe postal code consists of 5 digits, and 'CEDEX' may be followed by a space and a 1- or 2-digit number. For example:",
        correct: '<span>97199</span> is a valid Guadeloupe postal code.',
        incorrect:
            '<span>GP-12345</span> is not a valid Guadeloupe postal code.',
        description:
            "Used for validating Guadeloupe postal codes. A Guadeloupe postal code is considered valid if it consists of 5 digits, and 'CEDEX' may be followed by a space and a 1- or 2-digit number."
    },
    'postal-code-gu': {
        info: 'Enter a valid/invalid Guam postal code to test. A valid Guam postal code consists of 5 digits, and it may include a hyphen followed by 4 digits. For example:',
        correct: '<span>96999</span> is a valid Guam postal code.',
        incorrect: '<span>96999-1234</span> is not a valid Guam postal code.',
        description:
            'Used for validating Guam postal codes. A Guam postal code is considered valid if it consists of 5 digits, and it may include a hyphen followed by 4 digits.'
    },
    'postal-code-gt': {
        info: 'Enter a valid/invalid Guatemalan postal code to test. A valid Guatemalan postal code follows specific numeric patterns. For example:',
        correct: '<span>01001</span> is a valid Guatemalan postal code.',
        incorrect:
            '<span>GT-12345</span> is not a valid Guatemalan postal code.',
        description:
            'Used for validating Guatemalan postal codes. A Guatemalan postal code is considered valid if it follows the specified numeric patterns.'
    },
    'postal-code-gg': {
        info: "Enter a valid/invalid Guernsey postal code to test. A valid Guernsey postal code consists of 'GY' followed by up to 2 digits. For example:",
        correct: '<span>GY99</span> is a valid Guernsey postal code.',
        incorrect: '<span>GG-123</span> is not a valid Guernsey postal code.',
        description:
            "Used for validating Guernsey postal codes. A Guernsey postal code is considered valid if it consists of 'GY' followed by up to 2 digits."
    },
    'postal-code-gn': {
        info: 'Enter a valid/invalid Guinean postal code to test. A valid Guinean postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Guinean postal code.',
        incorrect: '<span>GN-12345</span> is not a valid Guinean postal code.',
        description:
            'Used for validating Guinean postal codes. A Guinean postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-gw': {
        info: 'Enter a valid/invalid Guinean-Bissau postal code to test. A valid Guinean-Bissau postal code consists of 4 digits. For example:',
        correct: '<span>1234</span> is a valid Guinean-Bissau postal code.',
        incorrect:
            '<span>GW-12345</span> is not a valid Guinean-Bissau postal code.',
        description:
            'Used for validating Guinean-Bissau postal codes. A Guinean-Bissau postal code is considered valid if it consists of 4 digits.'
    },
    'postal-code-gy': null,
    'postal-code-ht': {
        info: "Enter a valid/invalid Haitian postal code to test. A valid Haitian postal code starts with 'HT' followed by 4 digits, e.g., 'HT1234'.",
        correct: '<span>HT1234</span> is a valid Haitian postal code.',
        incorrect: '<span>HT-12345</span> is not a valid Haitian postal code.',
        description:
            "Used for validating Haitian postal codes. A valid Haitian postal code starts with 'HT' followed by 4 digits."
    },
    'postal-code-hm': {
        info: "Enter a valid/invalid Heard and McDonald Islands postal code to test. A valid code is '7151'.",
        correct:
            '<span>7151</span> is a valid postal code for Heard and McDonald Islands.',
        incorrect:
            '<span>HM1234</span> is not a valid postal code for Heard and McDonald Islands.',
        description:
            "Used for validating Heard and McDonald Islands postal codes. The valid code is '7151'."
    },
    'postal-code-va': {
        info: "Enter a valid/invalid Vatican City postal code to test. A valid code is '00120'.",
        correct: '<span>00120</span> is a valid postal code for Vatican City.',
        incorrect:
            '<span>VA12345</span> is not a valid postal code for Vatican City.',
        description:
            "Used for validating Vatican City postal codes. The valid code is '00120'."
    },
    'postal-code-hn': {
        info: "Enter a valid/invalid Honduran postal code to test. Valid codes include '10101', '12101', '12111', '13101', '13201', '14101', '14201', '15101', '15201', '16101', '16201', and others.",
        correct: '<span>10101</span> is a valid Honduran postal code.',
        incorrect: '<span>HN-12345</span> is not a valid Honduran postal code.',
        description:
            "Used for validating Honduran postal codes. Valid codes include '10101', '12101', '12111', '13101', '13201', '14101', '14201', '15101', '15201', '16101', '16201', and others."
    },
    'postal-code-hk': null,
    'postal-code-hu': {
        info: 'Enter a valid/invalid Hungarian postal code to test. A valid Hungarian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Hungarian postal code.',
        incorrect:
            '<span>HU-12345</span> is not a valid Hungarian postal code.',
        description:
            'Used for validating Hungarian postal codes. A valid Hungarian postal code consists of 4 digits.'
    },
    'postal-code-is': {
        info: 'Enter a valid/invalid Icelandic postal code to test. A valid Icelandic postal code consists of 3 digits.',
        correct: '<span>123</span> is a valid Icelandic postal code.',
        incorrect:
            '<span>IS-12345</span> is not a valid Icelandic postal code.',
        description:
            'Used for validating Icelandic postal codes. A valid Icelandic postal code consists of 3 digits.'
    },
    'postal-code-in': {
        info: 'Enter a valid/invalid Indian postal code to test. A valid Indian postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Indian postal code.',
        incorrect: '<span>IN-12345</span> is not a valid Indian postal code.',
        description:
            'Used for validating Indian postal codes. A valid Indian postal code consists of 6 digits.'
    },
    'postal-code-id': {
        info: 'Enter a valid/invalid Indonesian postal code to test. A valid Indonesian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Indonesian postal code.',
        incorrect:
            '<span>ID-1234</span> is not a valid Indonesian postal code.',
        description:
            'Used for validating Indonesian postal codes. A valid Indonesian postal code consists of 5 digits.'
    },
    'postal-code-ir': {
        info: 'Enter a valid/invalid Iranian postal code to test. A valid Iranian postal code consists of 10 digits or 5 digits followed by a hyphen and 1 to 3 more digits.',
        correct:
            '<span>1234567890</span> or <span>12345-678</span> are valid Iranian postal codes.',
        incorrect: '<span>IR-12345</span> is not a valid Iranian postal code.',
        description:
            'Used for validating Iranian postal codes. A valid Iranian postal code consists of 10 digits or 5 digits followed by a hyphen and 1 to 3 more digits.'
    },
    'postal-code-iq': {
        info: 'Enter a valid/invalid Iraqi postal code to test. A valid Iraqi postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Iraqi postal code.',
        incorrect: '<span>IQ-12345</span> is not a valid Iraqi postal code.',
        description:
            'Used for validating Iraqi postal codes. A valid Iraqi postal code consists of 6 digits.'
    },
    'postal-code-ie': {
        info: 'Enter a valid/invalid Irish postal code to test. A valid Irish postal code consists of 2 to 3 alphanumeric characters (letters and numbers) and may have an optional space followed by 1 or 2 alphanumeric characters.',
        correct:
            '<span>D12</span> or <span>D12 ABC</span> are valid Irish postal codes.',
        incorrect: '<span>IE123</span> is not a valid Irish postal code.',
        description:
            'Used for validating Irish postal codes. A valid Irish postal code consists of 2 to 3 alphanumeric characters and may have an optional space followed by 1 or 2 alphanumeric characters.'
    },
    'postal-code-im': {
        info: "Enter a valid/invalid Isle of Man postal code to test. A valid code is 'IM' followed by 1 or 2 digits and an optional space followed by 1 or 2 alphanumeric characters.",
        correct:
            '<span>IM1</span> or <span>IM2 AA</span> are valid Isle of Man postal codes.',
        incorrect:
            '<span>IM-123</span> is not a valid Isle of Man postal code.',
        description:
            "Used for validating Isle of Man postal codes. A valid code is 'IM' followed by 1 or 2 digits and an optional space followed by 1 or 2 alphanumeric characters."
    },
    'postal-code-il': {
        info: 'Enter a valid/invalid Israeli postal code to test. A valid Israeli postal code consists of 7 digits.',
        correct: '<span>1234567</span> is a valid Israeli postal code.',
        incorrect: '<span>IL-12345</span> is not a valid Israeli postal code.',
        description:
            'Used for validating Israeli postal codes. A valid Israeli postal code consists of 7 digits.'
    },
    'postal-code-it': {
        info: 'Enter a valid/invalid Italian postal code to test. A valid Italian postal code consists of 5 digits, with specific format patterns for different regions.',
        correct:
            '<span>00123</span> or <span>48123</span> are valid Italian postal codes.',
        incorrect: '<span>IT-12345</span> is not a valid Italian postal code.',
        description:
            'Used for validating Italian postal codes. A valid Italian postal code consists of 5 digits, with specific format patterns for different regions.'
    },
    'postal-code-jm': {
        info: "Enter a valid/invalid Jamaican postal code to test. A valid Jamaican postal code starts with 'JM' followed by 3 uppercase letters and 2 digits, e.g., 'JMABC12'.",
        correct: '<span>JMABC12</span> is a valid Jamaican postal code.',
        incorrect: '<span>JM12345</span> is not a valid Jamaican postal code.',
        description:
            "Used for validating Jamaican postal codes. A valid Jamaican postal code starts with 'JM' followed by 3 uppercase letters and 2 digits."
    },
    'postal-code-jp': {
        info: "Enter a valid/invalid Japanese postal code to test. A valid Japanese postal code consists of 7 digits in the format '123-4567'.",
        correct: '<span>123-4567</span> is a valid Japanese postal code.',
        incorrect:
            '<span>JP1234567</span> is not a valid Japanese postal code.',
        description:
            "Used for validating Japanese postal codes. A valid Japanese postal code consists of 7 digits in the format '123-4567'."
    },
    'postal-code-je': {
        info: "Enter a valid/invalid Jersey postal code to test. A valid Jersey postal code starts with 'JE' followed by 1 or 2 digits, e.g., 'JE1' or 'JE12'.",
        correct:
            '<span>JE1</span> or <span>JE12</span> are valid Jersey postal codes.',
        incorrect: '<span>JE123</span> is not a valid Jersey postal code.',
        description:
            "Used for validating Jersey postal codes. A valid Jersey postal code starts with 'JE' followed by 1 or 2 digits."
    },
    'postal-code-jo': {
        info: 'Enter a valid/invalid Jordanian postal code to test. A valid Jordanian postal code consists of 5 digits, with certain patterns for different regions.',
        correct:
            "Valid Jordanian postal codes include '12345' for certain regions.",
        incorrect:
            '<span>JO-12345</span> is not a valid Jordanian postal code.',
        description:
            'Used for validating Jordanian postal codes. A valid Jordanian postal code consists of 5 digits, with specific patterns for different regions.'
    },
    'postal-code-kz': {
        info: 'Enter a valid/invalid Kazakhstani postal code to test. A valid Kazakhstani postal code consists of 6 characters, including letters and digits.',
        correct: '<span>K1A2B3</span> is a valid Kazakhstani postal code.',
        incorrect:
            '<span>KZ12345</span> is not a valid Kazakhstani postal code.',
        description:
            'Used for validating Kazakhstani postal codes. A valid Kazakhstani postal code consists of 6 characters, including letters and digits.'
    },
    'postal-code-ke': {
        info: 'Enter a valid/invalid Kenyan postal code to test. A valid Kenyan postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Kenyan postal code.',
        incorrect: '<span>KE-12345</span> is not a valid Kenyan postal code.',
        description:
            'Used for validating Kenyan postal codes. A valid Kenyan postal code consists of 5 digits.'
    },
    'postal-code-ki': {
        info: "Enter a valid/invalid Kiribati postal code to test. A valid Kiribati postal code starts with 'KI0' followed by 3 digits, e.g., 'KI0123'.",
        correct: '<span>KI0123</span> is a valid Kiribati postal code.',
        incorrect: '<span>KI-12345</span> is not a valid Kiribati postal code.',
        description:
            "Used for validating Kiribati postal codes. A valid Kiribati postal code starts with 'KI0' followed by 3 digits."
    },
    'postal-code-xk': {
        info: 'Enter a valid/invalid postal code for Kosovo. Valid codes consist of a number from 10 to 73 followed by a space and a 3-digit number.',
        correct:
            '<span>15 123</span> or <span>73 999</span> are valid postal codes for Kosovo.',
        incorrect:
            '<span>XK12345</span> is not a valid postal code for Kosovo.',
        description:
            'Used for validating postal codes in Kosovo. Valid codes consist of a number from 10 to 73 followed by a space and a 3-digit number.'
    },
    'postal-code-kw': {
        info: 'Enter a valid/invalid Kuwaiti postal code to test. A valid Kuwaiti postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Kuwaiti postal code.',
        incorrect: '<span>KW-12345</span> is not a valid Kuwaiti postal code.',
        description:
            'Used for validating Kuwaiti postal codes. A valid Kuwaiti postal code consists of 5 digits.'
    },
    'postal-code-ky': {
        info: "Enter a valid/invalid postal code for the Cayman Islands. Valid codes start with 'KY' followed by the number 1, 2, or 3.",
        correct:
            '<span>KY1</span>, <span>KY2</span>, or <span>KY3</span> are valid postal codes for the Cayman Islands.',
        incorrect:
            '<span>KY4</span> is not a valid postal code for the Cayman Islands.',
        description:
            "Used for validating postal codes in the Cayman Islands. Valid codes start with 'KY' followed by the number 1, 2, or 3."
    },
    'postal-code-kg': {
        info: "Enter a valid/invalid Kyrgyzstani postal code to test. A valid Kyrgyzstani postal code starts with the number 7, followed by 1 or 2 digits, and 4 additional digits, e.g., '7101234'.",
        correct: '<span>7101234</span> is a valid Kyrgyzstani postal code.',
        incorrect:
            '<span>KG-12345</span> is not a valid Kyrgyzstani postal code.',
        description:
            'Used for validating Kyrgyzstani postal codes. A valid Kyrgyzstani postal code starts with the number 7, followed by 1 or 2 digits, and 4 additional digits.'
    },
    'postal-code-la': {
        info: 'Enter a valid/invalid Lao postal code to test. A valid Lao postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Lao postal code.',
        incorrect: '<span>LA123456</span> is not a valid Lao postal code.',
        description:
            'Used for validating Lao postal codes. A valid Lao postal code consists of 5 digits.'
    },
    'postal-code-lv': {
        info: 'Enter a valid/invalid Latvian postal code to test. Valid Latvian postal codes include various formats.',
        correct: 'Valid Latvian postal codes have different formats.',
        incorrect:
            "There's no specific incorrect format defined for Latvian postal codes.",
        description:
            'Used for validating Latvian postal codes. Valid Latvian postal codes include various formats.'
    },
    'postal-code-lb': {
        info: 'Enter a valid/invalid Lebanese postal code to test. A valid Lebanese postal code consists of 4 digits, with an optional space followed by 4 more digits.',
        correct:
            '<span>1234</span> or <span>1234 5678</span> are valid Lebanese postal codes.',
        incorrect: '<span>LB-12345</span> is not a valid Lebanese postal code.',
        description:
            'Used for validating Lebanese postal codes. A valid Lebanese postal code consists of 4 digits, with an optional space followed by 4 more digits.'
    },
    'postal-code-ls': {
        info: 'Enter a valid/invalid Lesotho postal code to test. A valid Lesotho postal code consists of 3 digits.',
        correct: '<span>123</span> is a valid Lesotho postal code.',
        incorrect: '<span>LS12345</span> is not a valid Lesotho postal code.',
        description:
            'Used for validating Lesotho postal codes. A valid Lesotho postal code consists of 3 digits.'
    },
    'postal-code-lr': {
        info: 'Enter a valid/invalid Liberian postal code to test. A valid Liberian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Liberian postal code.',
        incorrect: '<span>LR-12345</span> is not a valid Liberian postal code.',
        description:
            'Used for validating Liberian postal codes. A valid Liberian postal code consists of 4 digits.'
    },
    'postal-code-ly': {
        info: "Enter a valid/invalid Libyan postal code to test. A valid Libyan postal code consists of 3 groups of 2 digits separated by dots, e.g., '12.34.56'.",
        correct: '<span>12.34.56</span> is a valid Libyan postal code.',
        incorrect: '<span>LY-12345</span> is not a valid Libyan postal code.',
        description:
            "Used for validating Libyan postal codes. A valid Libyan postal code consists of 3 groups of 2 digits separated by dots, e.g., '12.34.56'."
    },
    'postal-code-li': {
        info: 'Enter a valid/invalid Liechtenstein postal code to test. A valid Liechtenstein postal code consists of 4 digits in the range of 9485-9498.',
        correct:
            'Valid Liechtenstein postal codes include the range 9485-9498.',
        incorrect:
            '<span>LI-12345</span> is not a valid Liechtenstein postal code.',
        description:
            'Used for validating Liechtenstein postal codes. A valid Liechtenstein postal code consists of 4 digits in the range of 9485-9498.'
    },
    'postal-code-lt': {
        info: 'Enter a valid/invalid Lithuanian postal code to test. A valid Lithuanian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Lithuanian postal code.',
        incorrect:
            '<span>LT-12345</span> is not a valid Lithuanian postal code.',
        description:
            'Used for validating Lithuanian postal codes. A valid Lithuanian postal code consists of 5 digits.'
    },
    'postal-code-lu': {
        info: 'Enter a valid/invalid Luxembourgian postal code to test. Valid Luxembourgian postal codes include various formats.',
        correct: 'Valid Luxembourgian postal codes have different formats.',
        incorrect:
            "There's no specific incorrect format defined for Luxembourgian postal codes.",
        description:
            'Used for validating Luxembourgian postal codes. Valid Luxembourgian postal codes include various formats.'
    },
    'postal-code-mo': null,
    'postal-code-mg': {
        info: "Enter a valid/invalid Malagasy postal code to test. A valid Malagasy postal code consists of 3 groups of digits separated by spaces, e.g., '101 234 567'.",
        correct: '<span>101 234 567</span> is a valid Malagasy postal code.',
        incorrect:
            "There's no specific incorrect format defined for Malagasy postal codes.",
        description:
            'Used for validating Malagasy postal codes. A valid Malagasy postal code consists of 3 groups of digits separated by spaces.'
    },
    'postal-code-mw': {
        info: 'Enter a valid/invalid Malawian postal code to test. A valid Malawian postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Malawian postal code.',
        incorrect: '<span>MW-12345</span> is not a valid Malawian postal code.',
        description:
            'Used for validating Malawian postal codes. A valid Malawian postal code consists of 6 digits.'
    },
    'postal-code-my': {
        info: 'Enter a valid/invalid Malaysian postal code to test. A valid Malaysian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Malaysian postal code.',
        incorrect:
            '<span>MY-12345</span> is not a valid Malaysian postal code.',
        description:
            'Used for validating Malaysian postal codes. A valid Malaysian postal code consists of 5 digits.'
    },
    'postal-code-mv': {
        info: 'Enter a valid/invalid postal code for the Maldives. Valid Maldivian postal codes have different formats based on the atoll or island.',
        correct:
            'Valid Maldivian postal codes have various formats based on location.',
        incorrect:
            '<span>MV-12345</span> is not a valid Maldivian postal code.',
        description:
            'Used for validating Maldivian postal codes. Valid Maldivian postal codes have different formats based on the atoll or island.'
    },
    'postal-code-ml': null,
    'postal-code-mt': {
        info: 'Enter a valid/invalid Maltese postal code to test. A valid Maltese postal code consists of 3 uppercase letters.',
        correct: '<span>ABC</span> is a valid Maltese postal code.',
        incorrect: '<span>MT-123</span> is not a valid Maltese postal code.',
        description:
            'Used for validating Maltese postal codes. A valid Maltese postal code consists of 3 uppercase letters.'
    },
    'postal-code-mh': {
        info: "Enter a valid/invalid Marshallese postal code to test. Valid codes include '969' followed by 2 digits, or '969' followed by 2 digits, a hyphen, and 4 more digits.",
        correct:
            '<span>96912</span> or <span>96912-3456</span> are valid Marshallese postal codes.',
        incorrect:
            '<span>MH-12345</span> is not a valid Marshallese postal code.',
        description:
            "Used for validating Marshallese postal codes. A valid Marshallese postal code includes '969' followed by 2 digits, or '969' followed by 2 digits, a hyphen, and 4 more digits."
    },
    'postal-code-mq': {
        info: "Enter a valid/invalid postal code for Martinique. Valid codes include '972' followed by 2 digits and optionally 'CEDEX' followed by '1' or '2'.",
        correct:
            '<span>97234</span> or <span>97234 CEDEX 1</span> are valid postal codes for Martinique.',
        incorrect:
            '<span>MQ-12345</span> is not a valid postal code for Martinique.',
        description:
            "Used for validating postal codes in Martinique. Valid codes include '972' followed by 2 digits and optionally 'CEDEX' followed by '1' or '2'."
    },
    'postal-code-mr': null,
    'postal-code-mu': {
        info: 'Enter a valid/invalid Mauritian postal code to test. A valid Mauritian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Mauritian postal code.',
        incorrect:
            '<span>MU-123456</span> is not a valid Mauritian postal code.',
        description:
            'Used for validating Mauritian postal codes. A valid Mauritian postal code consists of 5 digits.'
    },
    'postal-code-yt': {
        info: "Enter a valid/invalid postal code for Mayotte. Valid Mayotte postal codes include '976' followed by 2 digits, or '985' followed by 2 digits.",
        correct:
            '<span>97612</span> or <span>98534</span> are valid postal codes for Mayotte.',
        incorrect:
            '<span>YT-12345</span> is not a valid postal code for Mayotte.',
        description:
            "Used for validating postal codes in Mayotte. Valid Mayotte postal codes include '976' followed by 2 digits, or '985' followed by 2 digits."
    },
    'postal-code-mx': {
        info: 'Enter a valid/invalid Mexican postal code to test. A valid Mexican postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Mexican postal code.',
        incorrect: '<span>MX-123456</span> is not a valid Mexican postal code.',
        description:
            'Used for validating Mexican postal codes. A valid Mexican postal code consists of 5 digits.'
    },
    'postal-code-fm': {
        info: "Enter a valid/invalid Micronesian postal code to test. Valid Micronesian postal codes include '9694' followed by a digit, or '9694' followed by a digit, a hyphen, and 4 more digits.",
        correct:
            '<span>969412</span> or <span>9694-1234</span> are valid Micronesian postal codes.',
        incorrect:
            '<span>FM-12345</span> is not a valid Micronesian postal code.',
        description:
            "Used for validating Micronesian postal codes. Valid Micronesian postal codes include '9694' followed by a digit, or '9694' followed by a digit, a hyphen, and 4 more digits."
    },
    'postal-code-md': {
        info: 'Enter a valid/invalid Moldovan postal code to test. Valid Moldovan postal codes include various formats.',
        correct: 'Valid Moldovan postal codes have different formats.',
        incorrect: '<span>MD-12345</span> is not a valid Moldovan postal code.',
        description:
            'Used for validating Moldovan postal codes. Valid Moldovan postal codes include various formats.'
    },
    'postal-code-mc': {
        info: "Enter a valid/invalid Monegasque postal code to test. A valid Monegasque postal code consists of '980' followed by 2 digits.",
        correct: '<span>98012</span> is a valid Monegasque postal code.',
        incorrect:
            '<span>MC-12345</span> is not a valid Monegasque postal code.',
        description:
            "Used for validating Monegasque postal codes. A valid Monegasque postal code consists of '980' followed by 2 digits."
    },
    'postal-code-mn': {
        info: 'Enter a valid/invalid Mongolian postal code to test. Valid Mongolian postal codes include various formats.',
        correct: 'Valid Mongolian postal codes have different formats.',
        incorrect:
            '<span>MN-12345</span> is not a valid Mongolian postal code.',
        description:
            'Used for validating Mongolian postal codes. Valid Mongolian postal codes include various formats.'
    },
    'postal-code-me': {
        info: "Enter a valid/invalid Montenegrin postal code to test. A valid Montenegrin postal code consists of '8' followed by '1', '4', or '5', followed by 3 more digits.",
        correct: '<span>81456</span> is a valid Montenegrin postal code.',
        incorrect:
            '<span>ME-12345</span> is not a valid Montenegrin postal code.',
        description:
            "Used for validating Montenegrin postal codes. A valid Montenegrin postal code consists of '8' followed by '1', '4', or '5', followed by 3 more digits."
    },
    'postal-code-ms': {
        info: "Enter a valid/invalid postal code for Montserrat. Valid Montserrat postal codes include 'MSR' followed by specific digits.",
        correct: '<span>MSR1130</span> is a valid postal code for Montserrat.',
        incorrect:
            '<span>MS-12345</span> is not a valid postal code for Montserrat.',
        description:
            "Used for validating postal codes in Montserrat. Valid Montserrat postal codes include 'MSR' followed by specific digits."
    },
    'postal-code-ma': {
        info: 'Enter a valid/invalid Moroccan postal code to test. A valid Moroccan postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Moroccan postal code.',
        incorrect:
            '<span>MA-123456</span> is not a valid Moroccan postal code.',
        description:
            'Used for validating Moroccan postal codes. A valid Moroccan postal code consists of 5 digits.'
    },
    'postal-code-mz': {
        info: 'Enter a valid/invalid Mozambican postal code to test. Valid Mozambican postal codes include specific digits and ranges.',
        correct:
            'Valid Mozambican postal codes have specific formats and ranges.',
        incorrect:
            '<span>MZ-12345</span> is not a valid Mozambican postal code.',
        description:
            'Used for validating Mozambican postal codes. Valid Mozambican postal codes include specific digits and ranges.'
    },
    'postal-code-mm': {
        info: 'Enter a valid/invalid Burmese (Myanmar) postal code to test. Valid Burmese postal codes include specific codes and ranges.',
        correct: 'Valid Burmese postal codes have specific codes and ranges.',
        incorrect: '<span>MM-12345</span> is not a valid Burmese postal code.',
        description:
            'Used for validating Burmese (Myanmar) postal codes. Valid Burmese postal codes include specific codes and ranges.'
    },
    'postal-code-na': {
        info: 'Enter a valid/invalid Namibian postal code to test. A valid Namibian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Namibian postal code.',
        incorrect: '<span>NA-12345</span> is not a valid Namibian postal code.',
        description:
            'Used for validating Namibian postal codes. A valid Namibian postal code consists of 4 digits.'
    },
    'postal-code-nr': {
        info: "Enter a valid/invalid Nauruan postal code to test. A valid Nauruan postal code is 'NRU68'.",
        correct: '<span>NRU68</span> is a valid Nauruan postal code.',
        incorrect: '<span>NR-12345</span> is not a valid Nauruan postal code.',
        description:
            "Used for validating Nauruan postal codes. A valid Nauruan postal code is 'NRU68'."
    },
    'postal-code-np': {
        info: 'Enter a valid/invalid Nepalese postal code to test. Valid Nepalese postal codes have specific patterns.',
        correct: 'Valid Nepalese postal codes have specific patterns.',
        incorrect: '<span>NP-12345</span> is not a valid Nepalese postal code.',
        description:
            'Used for validating Nepalese postal codes. Valid Nepalese postal codes have specific patterns.'
    },
    'postal-code-nl': {
        info: 'Enter a valid/invalid Dutch postal code to test. A valid Dutch postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Dutch postal code.',
        incorrect: '<span>NL-12345</span> is not a valid Dutch postal code.',
        description:
            'Used for validating Dutch postal codes. A valid Dutch postal code consists of 4 digits.'
    },
    'postal-code-nc': {
        info: "Enter a valid/invalid postal code for New Caledonia. A valid New Caledonian postal code is '988' followed by 2 digits.",
        correct: '<span>98812</span> is a valid postal code for New Caledonia.',
        incorrect:
            '<span>NC-12345</span> is not a valid postal code for New Caledonia.',
        description:
            "Used for validating postal codes in New Caledonia. A valid New Caledonian postal code is '988' followed by 2 digits."
    },
    'postal-code-nz': {
        info: 'Enter a valid/invalid New Zealand postal code to test. A valid New Zealand postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid New Zealand postal code.',
        incorrect:
            '<span>NZ-12345</span> is not a valid New Zealand postal code.',
        description:
            'Used for validating New Zealand postal codes. A valid New Zealand postal code consists of 4 digits.'
    },
    'postal-code-ni': {
        info: 'Enter a valid/invalid Nicaraguan postal code to test. Valid Nicaraguan postal codes have specific patterns.',
        correct: 'Valid Nicaraguan postal codes have specific patterns.',
        incorrect:
            '<span>NI-12345</span> is not a valid Nicaraguan postal code.',
        description:
            'Used for validating Nicaraguan postal codes. Valid Nicaraguan postal codes have specific patterns.'
    },
    'postal-code-ne': {
        info: 'Enter a valid/invalid Nigerien postal code to test. A valid Nigerien postal code consists of 3 digits, with specific prefixes.',
        correct: '<span>100</span> is a valid Nigerien postal code.',
        incorrect: '<span>NE-12345</span> is not a valid Nigerien postal code.',
        description:
            'Used for validating Nigerien postal codes. A valid Nigerien postal code consists of 3 digits, with specific prefixes.'
    },
    'postal-code-ng': {
        info: 'Enter a valid/invalid Nigerian postal code to test. A valid Nigerian postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Nigerian postal code.',
        incorrect:
            '<span>NG-1234567</span> is not a valid Nigerian postal code.',
        description:
            'Used for validating Nigerian postal codes. A valid Nigerian postal code consists of 6 digits.'
    },
    'postal-code-nu': {
        info: "Enter a valid/invalid Niuean postal code to test. A valid Niuean postal code is '9974'.",
        correct: '<span>9974</span> is a valid Niuean postal code.',
        incorrect: '<span>NU-12345</span> is not a valid Niuean postal code.',
        description:
            "Used for validating Niuean postal codes. A valid Niuean postal code is '9974'."
    },
    'postal-code-nf': {
        info: "Enter a valid/invalid postal code for Norfolk Island. A valid Norfolk Island postal code is '2899'.",
        correct: '<span>2899</span> is a valid postal code for Norfolk Island.',
        incorrect:
            '<span>NF-12345</span> is not a valid postal code for Norfolk Island.',
        description:
            "Used for validating postal codes in Norfolk Island. A valid Norfolk Island postal code is '2899'."
    },
    'postal-code-kp': null,
    'postal-code-mk': {
        info: 'Enter a valid/invalid Macedonian postal code to test. A valid Macedonian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Macedonian postal code.',
        incorrect:
            '<span>MK-12345</span> is not a valid Macedonian postal code.',
        description:
            'Used for validating Macedonian postal codes. A valid Macedonian postal code consists of 4 digits.'
    },
    'postal-code-mp': {
        info: "Enter a valid/invalid postal code for the Northern Mariana Islands. Valid codes include '9695' followed by a digit, or '9695' followed by a digit, a hyphen, and 4 more digits.",
        correct:
            '<span>969512</span> or <span>9695-1234</span> are valid postal codes for the Northern Mariana Islands.',
        incorrect:
            '<span>MP-12345</span> is not a valid postal code for the Northern Mariana Islands.',
        description:
            "Used for validating postal codes in the Northern Mariana Islands. Valid codes include '9695' followed by a digit, or '9695' followed by a digit, a hyphen, and 4 more digits."
    },
    'postal-code-no': {
        info: 'Enter a valid/invalid Norwegian postal code to test. A valid Norwegian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Norwegian postal code.',
        incorrect:
            '<span>NO-12345</span> is not a valid Norwegian postal code.',
        description:
            'Used for validating Norwegian postal codes. A valid Norwegian postal code consists of 4 digits.'
    },
    'postal-code-om': {
        info: 'Enter a valid/invalid Omani postal code to test. A valid Omani postal code consists of 3 digits, with specific ranges.',
        correct: '<span>123</span> is a valid Omani postal code.',
        incorrect: '<span>OM-1234</span> is not a valid Omani postal code.',
        description:
            'Used for validating Omani postal codes. A valid Omani postal code consists of 3 digits, with specific ranges.'
    },
    'postal-code-pk': {
        info: 'Enter a valid/invalid Pakistani postal code to test. A valid Pakistani postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Pakistani postal code.',
        incorrect:
            '<span>PK-123456</span> is not a valid Pakistani postal code.',
        description:
            'Used for validating Pakistani postal codes. A valid Pakistani postal code consists of 5 digits.'
    },
    'postal-code-pw': {
        info: "Enter a valid/invalid postal code for Palau. Valid Palauan postal codes include '96939' followed by 2 digits, or '96939' followed by a hyphen and 4 more digits.",
        correct:
            '<span>9693912</span> or <span>96939-1234</span> are valid postal codes for Palau.',
        incorrect:
            '<span>PW-12345</span> is not a valid postal code for Palau.',
        description:
            "Used for validating postal codes in Palau. Valid Palauan postal codes include '96939' followed by 2 digits, or '96939' followed by a hyphen and 4 more digits."
    },
    'postal-code-ps': {
        info: "Enter a valid/invalid Palestinian postal code to test. A valid Palestinian postal code consists of 'P' followed by 6 digits.",
        correct: '<span>P123456</span> is a valid Palestinian postal code.',
        incorrect:
            '<span>PS-1234567</span> is not a valid Palestinian postal code.',
        description:
            "Used for validating Palestinian postal codes. A valid Palestinian postal code consists of 'P' followed by 6 digits."
    },
    'postal-code-pa': {
        info: 'Enter a valid/invalid Panamanian postal code to test. A valid Panamanian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Panamanian postal code.',
        incorrect:
            '<span>PA-12345</span> is not a valid Panamanian postal code.',
        description:
            'Used for validating Panamanian postal codes. A valid Panamanian postal code consists of 4 digits.'
    },
    'postal-code-pg': {
        info: "Enter a valid/invalid postal code for Papua New Guinea. Valid codes include '11' followed by a digit from 1 to 9, or '2' followed by a digit from 0 to 9, or '3' followed by a digit from 0 to 3.",
        correct:
            '<span>1101</span> or <span>2302</span> are valid postal codes for Papua New Guinea.',
        incorrect:
            '<span>PG-12345</span> is not a valid postal code for Papua New Guinea.',
        description:
            "Used for validating postal codes in Papua New Guinea. Valid codes include '11' followed by a digit from 1 to 9, or '2' followed by a digit from 0 to 9, or '3' followed by a digit from 0 to 3."
    },
    'postal-code-py': {
        info: 'Enter a valid/invalid Paraguayan postal code to test. A valid Paraguayan postal code consists of 6 digits.',
        correct: '<span>012345</span> is a valid Paraguayan postal code.',
        incorrect:
            '<span>PY-1234567</span> is not a valid Paraguayan postal code.',
        description:
            'Used for validating Paraguayan postal codes. A valid Paraguayan postal code consists of 6 digits.'
    },
    'postal-code-pe': {
        info: 'Enter a valid/invalid Peruvian postal code to test. A valid Peruvian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Peruvian postal code.',
        incorrect:
            '<span>PE-123456</span> is not a valid Peruvian postal code.',
        description:
            'Used for validating Peruvian postal codes. A valid Peruvian postal code consists of 5 digits.'
    },
    'postal-code-ph': {
        info: 'Enter a valid/invalid postal code for the Philippines. A valid Philippine postal code consists of 4 digits.',
        correct:
            '<span>1234</span> is a valid postal code for the Philippines.',
        incorrect:
            '<span>PH-12345</span> is not a valid postal code for the Philippines.',
        description:
            'Used for validating postal codes in the Philippines. A valid Philippine postal code consists of 4 digits.'
    },
    'postal-code-pn': {
        info: "Enter a valid/invalid postal code for Pitcairn. A valid Pitcairn postal code is 'PCRN 1ZZ'.",
        correct: '<span>PCRN 1ZZ</span> is a valid postal code for Pitcairn.',
        incorrect:
            '<span>PN-12345</span> is not a valid postal code for Pitcairn.',
        description:
            "Used for validating postal codes in Pitcairn. A valid Pitcairn postal code is 'PCRN 1ZZ'."
    },
    'postal-code-pl': {
        info: 'Enter a valid/invalid Polish postal code to test. A valid Polish postal code consists of 5 digits or 2 digits followed by a hyphen and 3 more digits.',
        correct:
            '<span>12-345</span> or <span>12345</span> are valid Polish postal codes.',
        incorrect: '<span>PL-123456</span> is not a valid Polish postal code.',
        description:
            'Used for validating Polish postal codes. A valid Polish postal code consists of 5 digits or 2 digits followed by a hyphen and 3 more digits.'
    },
    'postal-code-pt': {
        info: 'Enter a valid/invalid Portuguese postal code to test. A valid Portuguese postal code consists of 4 digits followed by a hyphen and 3 more digits.',
        correct: '<span>1234-567</span> is a valid Portuguese postal code.',
        incorrect:
            '<span>PT-12345-6789</span> is not a valid Portuguese postal code.',
        description:
            'Used for validating Portuguese postal codes. A valid Portuguese postal code consists of 4 digits followed by a hyphen and 3 more digits.'
    },
    'postal-code-pr': {
        info: 'Enter a valid/invalid Puerto Rican postal code to test. A valid Puerto Rican postal code consists of 5 digits.',
        correct: '<span>00678</span> is a valid Puerto Rican postal code.',
        incorrect:
            '<span>PR-12345</span> is not a valid Puerto Rican postal code.',
        description:
            'Used for validating Puerto Rican postal codes. A valid Puerto Rican postal code consists of 5 digits.'
    },
    'postal-code-qa': null,
    'postal-code-re': {
        info: "Enter a valid/invalid postal code for Réunion. Valid Réunion postal codes include '97478' followed by 2 digits, optionally followed by 'CEDEX'.",
        correct:
            '<span>9747801</span> or <span>97478 CEDEX</span> are valid postal codes for Réunion.',
        incorrect:
            '<span>RE-123456</span> is not a valid postal code for Réunion.',
        description:
            "Used for validating postal codes in Réunion. Valid Réunion postal codes include '97478' followed by 2 digits, optionally followed by 'CEDEX'."
    },
    'postal-code-ro': {
        info: 'Enter a valid/invalid Romanian postal code to test. A valid Romanian postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Romanian postal code.',
        incorrect:
            '<span>RO-1234567</span> is not a valid Romanian postal code.',
        description:
            'Used for validating Romanian postal codes. A valid Romanian postal code consists of 6 digits.'
    },
    'postal-code-ru': {
        info: 'Enter a valid/invalid Russian postal code to test. A valid Russian postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Russian postal code.',
        incorrect:
            '<span>RU-1234567</span> is not a valid Russian postal code.',
        description:
            'Used for validating Russian postal codes. A valid Russian postal code consists of 6 digits.'
    },
    'postal-code-rw': null,
    'postal-code-bq': null,
    'postal-code-bl': {
        info: "Enter a valid/invalid postal code for Saint Barthélemy. Valid Saint Barthélemy postal codes include '97133' followed by 2 digits or '97090' followed by 1 digit.",
        correct:
            '<span>971335</span> or <span>970901</span> are valid postal codes for Saint Barthélemy.',
        incorrect:
            '<span>BL-123456</span> is not a valid postal code for Saint Barthélemy.',
        description:
            "Used for validating postal codes in Saint Barthélemy. Valid Saint Barthélemy postal codes include '97133' followed by 2 digits or '97090' followed by 1 digit."
    },
    'postal-code-sh': {
        info: "Enter a valid/invalid postal code for Saint Helena. Valid Saint Helena postal codes include 'STHL 1ZZ', 'ASCN 1ZZ', or 'TSCU 1ZZ'.",
        correct:
            '<span>STHL 1ZZ</span> is a valid postal code for Saint Helena.',
        incorrect:
            '<span>SH-123456</span> is not a valid postal code for Saint Helena.',
        description:
            "Used for validating postal codes in Saint Helena. Valid Saint Helena postal codes include 'STHL 1ZZ', 'ASCN 1ZZ', or 'TSCU 1ZZ'."
    },
    'postal-code-kn': {
        info: 'Enter a valid/invalid postal code for Saint Kitts and Nevis. Valid Saint Kitts and Nevis postal codes include specific ranges.',
        correct:
            'Valid postal codes for Saint Kitts and Nevis are in the format <span>KN01xx</span> to <span>KN12xx</span>.',
        incorrect:
            '<span>KN-123456</span> is not a valid postal code for Saint Kitts and Nevis.',
        description:
            'Used for validating postal codes in Saint Kitts and Nevis. Valid postal codes include specific ranges.'
    },
    'postal-code-lc': {
        info: 'Enter a valid/invalid postal code for Saint Lucia. Valid Saint Lucia postal codes include 2 digits followed by 3 digits.',
        correct:
            '<span>LC01 123</span> is a valid postal code for Saint Lucia.',
        incorrect:
            '<span>LC-12345</span> is not a valid postal code for Saint Lucia.',
        description:
            'Used for validating postal codes in Saint Lucia. Valid Saint Lucia postal codes include 2 digits followed by 3 digits.'
    },
    'postal-code-mf': {
        info: 'Enter a valid/invalid postal code for Saint Martin. Valid Saint Martin postal codes include specific ranges.',
        correct:
            'Valid postal codes for Saint Martin are in the format <span>9705x</span>.',
        incorrect:
            '<span>MF-123456</span> is not a valid postal code for Saint Martin.',
        description:
            'Used for validating postal codes in Saint Martin. Valid postal codes include specific ranges.'
    },
    'postal-code-pm': {
        info: 'Enter a valid/invalid postal code for Saint Pierre and Miquelon. Valid Saint Pierre and Miquelon postal codes are in the format <span>975xx</span>.',
        correct:
            '<span>97512</span> is a valid postal code for Saint Pierre and Miquelon.',
        incorrect:
            '<span>PM-12345</span> is not a valid postal code for Saint Pierre and Miquelon.',
        description:
            'Used for validating postal codes in Saint Pierre and Miquelon. Valid postal codes are in the format <span>975xx</span>.'
    },
    'postal-code-vc': {
        info: 'Enter a valid/invalid postal code for Saint Vincent and the Grenadines. Valid Saint Vincent and the Grenadines postal codes include specific ranges.',
        correct:
            'Valid postal codes for Saint Vincent and the Grenadines are in the format <span>VC01x</span> to <span>VC04x</span>.',
        incorrect:
            '<span>VC-123456</span> is not a valid postal code for Saint Vincent and the Grenadines.',
        description:
            'Used for validating postal codes in Saint Vincent and the Grenadines. Valid postal codes include specific ranges.'
    },
    'postal-code-ws': {
        info: 'Enter a valid/invalid postal code for Samoa. Valid Samoan postal codes are in the format <span>WS1xxx</span> to <span>WS2xxx</span>.',
        correct:
            'Valid postal codes for Samoa are in the format <span>WS1901</span> to <span>WS2999</span>.',
        incorrect:
            '<span>WS-123456</span> is not a valid postal code for Samoa.',
        description:
            'Used for validating postal codes in Samoa. Valid postal codes include specific ranges.'
    },
    'postal-code-sm': {
        info: "Enter a valid/invalid postal code for San Marino. Valid San Marino postal codes start with '4789' followed by one digit.",
        correct: '<span>47891</span> is a valid postal code for San Marino.',
        incorrect:
            '<span>SM-12345</span> is not a valid postal code for San Marino.',
        description:
            "Used for validating postal codes in San Marino. Valid San Marino postal codes start with '4789' followed by one digit."
    },
    'postal-code-st': null,
    'postal-code-sa': {
        info: 'Enter a valid/invalid Saudi Arabian postal code to test. A valid Saudi Arabian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Saudi Arabian postal code.',
        incorrect:
            '<span>SA-1234</span> is not a valid Saudi Arabian postal code.',
        description:
            'Used for validating Saudi Arabian postal codes. A valid Saudi Arabian postal code consists of 5 digits.'
    },
    'postal-code-sn': {
        info: 'Enter a valid/invalid Senegalese postal code to test. A valid Senegalese postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Senegalese postal code.',
        incorrect:
            '<span>SN-1234</span> is not a valid Senegalese postal code.',
        description:
            'Used for validating Senegalese postal codes. A valid Senegalese postal code consists of 5 digits.'
    },
    'postal-code-rs': {
        info: 'Enter a valid/invalid Serbian postal code to test. A valid Serbian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Serbian postal code.',
        incorrect: '<span>RS-1234</span> is not a valid Serbian postal code.',
        description:
            'Used for validating Serbian postal codes. A valid Serbian postal code consists of 5 digits.'
    },
    'postal-code-sc': null,
    'postal-code-sl': null,
    'postal-code-sg': {
        info: 'Enter a valid/invalid Singaporean postal code to test. A valid Singaporean postal code consists of 6 digits.',
        correct: '<span>123456</span> is a valid Singaporean postal code.',
        incorrect:
            '<span>SG-12345</span> is not a valid Singaporean postal code.',
        description:
            'Used for validating Singaporean postal codes. A valid Singaporean postal code consists of 6 digits.'
    },
    'postal-code-sx': null,
    'postal-code-sk': {
        info: 'Enter a valid/invalid Slovakian postal code to test. A valid Slovakian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Slovakian postal code.',
        incorrect: '<span>SK-1234</span> is not a valid Slovakian postal code.',
        description:
            'Used for validating Slovakian postal codes. A valid Slovakian postal code consists of 5 digits.'
    },
    'postal-code-si': {
        info: 'Enter a valid/invalid Slovenian postal code to test. A valid Slovenian postal code consists of 4 or 5 digits.',
        correct:
            '<span>1234</span> or <span>12345</span> are valid Slovenian postal codes.',
        incorrect: '<span>SI-123</span> is not a valid Slovenian postal code.',
        description:
            'Used for validating Slovenian postal codes. A valid Slovenian postal code consists of 4 or 5 digits.'
    },
    'postal-code-sb': null,
    'postal-code-so': {
        info: 'Enter a valid/invalid Somali postal code to test. A valid Somali postal code consists of a letter code (e.g., AD) followed by 5 digits.',
        correct: '<span>AD 12345</span> is a valid Somali postal code.',
        incorrect: '<span>SO-12345</span> is not a valid Somali postal code.',
        description:
            'Used for validating Somali postal codes. A valid Somali postal code consists of a letter code followed by 5 digits.'
    },
    'postal-code-za': {
        info: 'Enter a valid/invalid South African postal code to test. A valid South African postal code consists of 4 or 6 digits.',
        correct:
            '<span>1234</span> or <span>123456</span> are valid South African postal codes.',
        incorrect:
            '<span>ZA-12345</span> is not a valid South African postal code.',
        description:
            'Used for validating South African postal codes. A valid South African postal code consists of 4 or 6 digits.'
    },
    'postal-code-gs': {
        info: "Enter a valid/invalid postal code for South Georgia and the South Sandwich Islands. A valid South Georgia and the South Sandwich Islands postal code is 'SIQQ 1ZZ'.",
        correct:
            '<span>SIQQ 1ZZ</span> is a valid postal code for South Georgia and the South Sandwich Islands.',
        incorrect:
            '<span>GS-12345</span> is not a valid postal code for South Georgia and the South Sandwich Islands.',
        description:
            "Used for validating postal codes in South Georgia and the South Sandwich Islands. A valid postal code is 'SIQQ 1ZZ'."
    },
    'postal-code-kr': {
        info: 'Enter a valid/invalid South Korean postal code to test. A valid South Korean postal code consists of 5 or 6 digits.',
        correct:
            '<span>12345</span> or <span>123456</span> are valid South Korean postal codes.',
        incorrect:
            '<span>KR-1234</span> is not a valid South Korean postal code.',
        description:
            'Used for validating South Korean postal codes. A valid South Korean postal code consists of 5 or 6 digits.'
    },
    'postal-code-ss': {
        info: 'Enter a valid/invalid South Sudanese postal code to test. A valid South Sudanese postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid South Sudanese postal code.',
        incorrect:
            '<span>SS-1234</span> is not a valid South Sudanese postal code.',
        description:
            'Used for validating South Sudanese postal codes. A valid South Sudanese postal code consists of 5 digits.'
    },
    'postal-code-es': {
        info: 'Enter a valid/invalid Spanish postal code to test. A valid Spanish postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Spanish postal code.',
        incorrect: '<span>ES-1234</span> is not a valid Spanish postal code.',
        description:
            'Used for validating Spanish postal codes. A valid Spanish postal code consists of 5 digits.'
    },
    'postal-code-lk': {
        info: 'Enter a valid/invalid Sri Lankan postal code to test. A valid Sri Lankan postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Sri Lankan postal code.',
        incorrect:
            '<span>LK-1234</span> is not a valid Sri Lankan postal code.',
        description:
            'Used for validating Sri Lankan postal codes. A valid Sri Lankan postal code consists of 5 digits.'
    },
    'postal-code-sd': {
        info: 'Enter a valid/invalid Sudanese postal code to test. A valid Sudanese postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Sudanese postal code.',
        incorrect: '<span>SD-1234</span> is not a valid Sudanese postal code.',
        description:
            'Used for validating Sudanese postal codes. A valid Sudanese postal code consists of 5 digits.'
    },
    'postal-code-sr': null,
    'postal-code-sj': {
        info: 'Enter a valid/invalid Svalbard and Jan Mayen postal code to test. A valid Svalbard and Jan Mayen postal code consists of 4 digits.',
        correct:
            '<span>1234</span> is a valid Svalbard and Jan Mayen postal code.',
        incorrect:
            '<span>SJ-12345</span> is not a valid Svalbard and Jan Mayen postal code.',
        description:
            'Used for validating Svalbard and Jan Mayen postal codes. A valid postal code consists of 4 digits.'
    },
    'postal-code-sz': {
        info: 'Enter a valid/invalid Swazi postal code to test. A valid Swazi postal code consists of a letter (H, L, M, S) followed by 3 digits.',
        correct: '<span>H123</span> is a valid Swazi postal code.',
        incorrect: '<span>SZ-12345</span> is not a valid Swazi postal code.',
        description:
            'Used for validating Swazi postal codes. A valid Swazi postal code consists of a letter followed by 3 digits.'
    },
    'postal-code-se': {
        info: 'Enter a valid/invalid Swedish postal code to test. A valid Swedish postal code consists of 5 digits with optional spaces.',
        correct: '<span>12345</span> is a valid Swedish postal code.',
        incorrect: '<span>SE-1234</span> is not a valid Swedish postal code.',
        description:
            'Used for validating Swedish postal codes. A valid Swedish postal code consists of 5 digits with optional spaces.'
    },
    'postal-code-ch': {
        info: 'Enter a valid/invalid Swiss postal code to test. A valid Swiss postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Swiss postal code.',
        incorrect: '<span>CH-12345</span> is not a valid Swiss postal code.',
        description:
            'Used for validating Swiss postal codes. A valid Swiss postal code consists of 4 digits.'
    },
    'postal-code-sy': null,
    'postal-code-tw': {
        info: 'Enter a valid/invalid Taiwanese postal code to test. A valid Taiwanese postal code consists of 3 or 6 digits.',
        correct:
            '<span>123</span> or <span>123456</span> are valid Taiwanese postal codes.',
        incorrect:
            '<span>TW-12345</span> is not a valid Taiwanese postal code.',
        description:
            'Used for validating Taiwanese postal codes. A valid Taiwanese postal code consists of 3 or 6 digits.'
    },
    'postal-code-tj': {
        info: "Enter a valid/invalid Tajikistani postal code to test. A valid Tajikistani postal code consists of 6 digits starting with '7'.",
        correct: '<span>701234</span> is a valid Tajikistani postal code.',
        incorrect:
            '<span>TJ-12345</span> is not a valid Tajikistani postal code.',
        description:
            "Used for validating Tajikistani postal codes. A valid Tajikistani postal code consists of 6 digits starting with '7'."
    },
    'postal-code-tz': {
        info: 'Enter a valid/invalid Tanzanian postal code to test. A valid Tanzanian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Tanzanian postal code.',
        incorrect: '<span>TZ-1234</span> is not a valid Tanzanian postal code.',
        description:
            'Used for validating Tanzanian postal codes. A valid Tanzanian postal code consists of 5 digits.'
    },
    'postal-code-th': {
        info: 'Enter a valid/invalid Thai postal code to test. A valid Thai postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Thai postal code.',
        incorrect: '<span>TH-1234</span> is not a valid Thai postal code.',
        description:
            'Used for validating Thai postal codes. A valid Thai postal code consists of 5 digits.'
    },
    'postal-code-tg': null,
    'postal-code-tk': null,
    'postal-code-to': null,
    'postal-code-tt': {
        info: 'Enter a valid/invalid Trinidad and Tobago postal code to test. A valid Trinidad and Tobago postal code consists of 6 digits.',
        correct:
            '<span>123456</span> is a valid Trinidad and Tobago postal code.',
        incorrect:
            '<span>TT-12345</span> is not a valid Trinidad and Tobago postal code.',
        description:
            'Used for validating Trinidad and Tobago postal codes. A valid postal code consists of 6 digits.'
    },
    'postal-code-tn': {
        info: 'Enter a valid/invalid Tunisian postal code to test. A valid Tunisian postal code consists of 4 digits.',
        correct: '<span>1234</span> is a valid Tunisian postal code.',
        incorrect: '<span>TN-12345</span> is not a valid Tunisian postal code.',
        description:
            'Used for validating Tunisian postal codes. A valid Tunisian postal code consists of 4 digits.'
    },
    'postal-code-tr': {
        info: 'Enter a valid/invalid Turkish postal code to test. A valid Turkish postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Turkish postal code.',
        incorrect: '<span>TR-1234</span> is not a valid Turkish postal code.',
        description:
            'Used for validating Turkish postal codes. A valid Turkish postal code consists of 5 digits.'
    },
    'postal-code-tm': {
        info: "Enter a valid/invalid Turkmenistani postal code to test. A valid Turkmenistani postal code consists of 6 digits starting with '7'.",
        correct: '<span>701234</span> is a valid Turkmenistani postal code.',
        incorrect:
            '<span>TM-12345</span> is not a valid Turkmenistani postal code.',
        description:
            "Used for validating Turkmenistani postal codes. A valid Turkmenistani postal code consists of 6 digits starting with '7'."
    },
    'postal-code-tc': {
        info: "Enter a valid/invalid postal code for the Turks and Caicos Islands. A valid postal code for the Turks and Caicos Islands is 'TKCA 1ZZ'.",
        correct:
            '<span>TKCA 1ZZ</span> is a valid postal code for the Turks and Caicos Islands.',
        incorrect:
            '<span>TC-12345</span> is not a valid postal code for the Turks and Caicos Islands.',
        description:
            "Used for validating postal codes in the Turks and Caicos Islands. A valid postal code is 'TKCA 1ZZ'."
    },
    'postal-code-tv': null,
    'postal-code-ug': null,
    'postal-code-ua': {
        info: 'Enter a valid/invalid Ukrainian postal code to test. A valid Ukrainian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Ukrainian postal code.',
        incorrect:
            '<span>UA-12345</span> is not a valid Ukrainian postal code.',
        description:
            'Used for validating Ukrainian postal codes. A valid Ukrainian postal code consists of 5 digits.'
    },
    'postal-code-ae': null,
    'postal-code-gb': {
        info: "Enter a valid/invalid UK postal code to test. UK postal codes follow various formats, including 'AA1 1AA', 'A1 1AA', or 'A1A 1AA'.",
        correct:
            '<span>AA1 1AA</span>, <span>A1 1AA</span>, or <span>A1A 1AA</span> are valid UK postal codes.',
        incorrect: '<span>UK-12345</span> is not a valid UK postal code.',
        description:
            "Used for validating UK postal codes. UK postal codes follow various formats, including 'AA1 1AA', 'A1 1AA', or 'A1A 1AA'."
    },
    'postal-code-us': {
        info: 'Enter a valid/invalid US ZIP code to test. A valid US ZIP code consists of 5 digits or 5+4 digits with a hyphen.',
        correct:
            '<span>12345</span> or <span>12345-6789</span> are valid US ZIP codes.',
        incorrect: '<span>US-1234</span> is not a valid US ZIP code.',
        description:
            'Used for validating US ZIP codes. A valid US ZIP code consists of 5 digits or 5+4 digits with a hyphen.'
    },
    'postal-code-um': null,
    'postal-code-vi': {
        info: 'Enter a valid/invalid US Virgin Islands postal code to test. A valid US Virgin Islands postal code consists of 3 digits.',
        correct: '<span>008</span> is a valid US Virgin Islands postal code.',
        incorrect:
            '<span>VI-123</span> is not a valid US Virgin Islands postal code.',
        description:
            'Used for validating US Virgin Islands postal codes. A valid US Virgin Islands postal code consists of 3 digits.'
    },
    'postal-code-uy': {
        info: 'Enter a valid/invalid Uruguayan postal code to test. A valid Uruguayan postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Uruguayan postal code.',
        incorrect: '<span>UY-1234</span> is not a valid Uruguayan postal code.',
        description:
            'Used for validating Uruguayan postal codes. A valid Uruguayan postal code consists of 5 digits.'
    },
    'postal-code-uz': {
        info: 'Enter a valid/invalid Uzbekistani postal code to test. A valid Uzbekistani postal code consists of 6 digits.',
        correct: '<span>100201</span> is a valid Uzbekistani postal code.',
        incorrect:
            '<span>UZ-12345</span> is not a valid Uzbekistani postal code.',
        description:
            'Used for validating Uzbekistani postal codes. A valid Uzbekistani postal code consists of 6 digits.'
    },
    'postal-code-vu': null,
    'postal-code-ve': {
        info: 'Enter a valid/invalid Venezuelan postal code to test. A valid Venezuelan postal code consists of 4 digits, optionally followed by a letter.',
        correct:
            '<span>1234</span> or <span>1234A</span> are valid Venezuelan postal codes.',
        incorrect:
            '<span>VE-12345</span> is not a valid Venezuelan postal code.',
        description:
            'Used for validating Venezuelan postal codes. A valid Venezuelan postal code consists of 4 digits, optionally followed by a letter.'
    },
    'postal-code-vn': {
        info: 'Enter a valid/invalid Vietnamese postal code to test. A valid Vietnamese postal code follows various formats, including 6 digits or 6+4 digits with a hyphen.',
        correct:
            '<span>123456</span> or <span>123456-7890</span> are valid Vietnamese postal codes.',
        incorrect:
            '<span>VN-12345</span> is not a valid Vietnamese postal code.',
        description:
            'Used for validating Vietnamese postal codes. A valid Vietnamese postal code follows various formats, including 6 digits or 6+4 digits with a hyphen.'
    },
    'postal-code-wf': {
        info: 'Enter a valid/invalid Wallis and Futuna postal code to test. A valid Wallis and Futuna postal code consists of 3 digits.',
        correct: '<span>986</span> is a valid Wallis and Futuna postal code.',
        incorrect:
            '<span>WF-123</span> is not a valid Wallis and Futuna postal code.',
        description:
            'Used for validating Wallis and Futuna postal codes. A valid Wallis and Futuna postal code consists of 3 digits.'
    },
    'postal-code-eh': {
        info: "Enter a valid/invalid Western Sahara postal code to test. A valid Western Sahara postal code consists of 5 digits starting with '7'.",
        correct: '<span>70123</span> is a valid Western Sahara postal code.',
        incorrect:
            '<span>EH-12345</span> is not a valid Western Sahara postal code.',
        description:
            "Used for validating Western Sahara postal codes. A valid Western Sahara postal code consists of 5 digits starting with '7'."
    },
    'postal-code-ye': null,
    'postal-code-zm': {
        info: 'Enter a valid/invalid Zambian postal code to test. A valid Zambian postal code consists of 5 digits.',
        correct: '<span>12345</span> is a valid Zambian postal code.',
        incorrect: '<span>ZM-1234</span> is not a valid Zambian postal code.',
        description:
            'Used for validating Zambian postal codes. A valid Zambian postal code consists of 5 digits.'
    },
    'postal-code-zw': null,
    'iban-ad': {
        info: 'Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Andorra (AD) must start with AD, followed by exactly 2 digits, then 8 more digits, and finally, 12 characters that can be uppercase letters (A-Z) or digits (0-9)',
        correct:
            '<span> AD12345678901234567890 </span> is a valid IBAN number.',
        incorrect:
            '<span>AD12-34567890ABCD1234EF56</span> is not a valid IBAN number.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Andorra'
    },
    'iban-ae': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the United Arab Emirates (AE) must start with 'AE,' followed by exactly 2 digits, then 3 more digits, and finally, 16 digits.",
        correct:
            '<span>AE123456789012345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>AE1234-56789012345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the United Arab Emirates'
    },
    'iban-al': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Albania (AL) must start with 'AL,' followed by exactly 2 digits, then 8 digits, and finally, 16 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>AL123456789012345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>AL1234-56789012345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Albania'
    },
    'iban-at': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Austria (AT) must start with 'AT,' followed by exactly 2 digits, and then 16 digits.",
        correct: '<span>AT1234567890123456</span> is a valid IBAN.',
        incorrect: '<span>AT12345678901234567</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Austria'
    },
    'iban-az': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Azerbaijan (AZ) must start with 'AZ,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z), and then 20 digits.",
        correct: '<span>AZ1234ABCD5678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>AZ1234-BCDE5678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Azerbaijan'
    },
    'iban-ba': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Bosnia and Herzegovina (BA) must start with 'BA,' followed by exactly 2 digits, and then 16 digits.",
        correct: '<span>BA1234567890123456</span> is a valid IBAN.',
        incorrect: '<span>BA12345678901234567</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Bosnia and Herzegovina'
    },
    'iban-be': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Belgium (BE) must start with 'BE,' followed by exactly 2 digits, and then 12 digits.",
        correct: '<span>BE123456789012</span> is a valid IBAN.',
        incorrect: '<span>BE1234567890123</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Belgium'
    },
    'iban-bg': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Bulgaria (BG) must start with 'BG,' followed by exactly 2 digits, 4 uppercase letters, 6 digits, and finally, 8 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>BG12ABCD1234567890AB12CD34</span> is a valid IBAN.',
        incorrect:
            '<span>BG1234-ABCD1234567890AB12CD34</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Bulgaria'
    },
    'iban-bh': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Bahrain (BH) must start with 'BH,' followed by exactly 2 digits, 4 uppercase letters, and 14 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>BH12ABCDABCD12345678901234</span> is a valid IBAN.',
        incorrect:
            '<span>BH1234-ABCDABCD12345678901234</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Bahrain'
    },
    'iban-br': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Brazil (BR) must start with 'BR,' followed by exactly 2 digits, and then 23 digits, with the last character being an uppercase letter (A-Z) or a digit (0-9).",
        correct: '<span>BR1234567890123456789012A</span> is a valid IBAN.',
        incorrect:
            '<span>BR1234-567890123456789012A</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Brazil'
    },
    'iban-by': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Belarus (BY) must start with 'BY,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and then 20 digits.",
        correct: '<span>BY12ABCD12345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>BY1234-ABCD12345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Belarus'
    },
    'iban-ch': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Switzerland (CH) must start with 'CH,' followed by exactly 2 digits, 5 digits, and then 12 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>CH9300762011623852957</span> is a valid IBAN.',
        incorrect:
            '<span>CH1234-5678901234567890ABCD</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Switzerland'
    },
    'iban-cr': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Costa Rica (CR) must start with 'CR,' followed by exactly 2 digits, and then 18 digits.",
        correct: '<span>CR123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>CR1234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Costa Rica'
    },
    'iban-cy': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Cyprus (CY) must start with 'CY,' followed by exactly 2 digits, 8 digits, and finally, 16 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>CY123456789012345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>CY1234-56789012345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Cyprus'
    },
    'iban-cz': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the Czech Republic (CZ) must start with 'CZ,' followed by exactly 2 digits, and then 20 digits.",
        correct: '<span>CZ12345678901234567890</span> is a valid IBAN.',
        incorrect: '<span>CZ123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the Czech Republic'
    },
    'iban-de': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Germany (DE) must start with 'DE,' followed by exactly 2 digits, and then 18 digits.",
        correct: '<span>DE123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>DE1234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Germany'
    },
    'iban-dk': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Denmark (DK) must start with 'DK,' followed by exactly 2 digits, and then 14 digits.",
        correct: '<span>DK12345678901234</span> is a valid IBAN.',
        incorrect: '<span>DK123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Denmark'
    },
    'iban-do': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the Dominican Republic (DO) must start with 'DO,' followed by exactly 2 digits, 4 uppercase letters, and 20 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>DO12ABCD1234567890123456789012</span> is a valid IBAN.',
        incorrect:
            '<span>DO1234-ABCD1234567890123456789012</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the Dominican Republic'
    },
    'iban-ee': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Estonia (EE) must start with 'EE,' followed by exactly 2 digits, and then 16 digits.",
        correct: '<span>EE1234567890123456</span> is a valid IBAN.',
        incorrect: '<span>EE12345678901234567</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Estonia'
    },
    'iban-eg': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Egypt (EG) must start with 'EG,' followed by exactly 2 digits, and then 25 digits.",
        correct: '<span>EG1234567890123456789012345</span> is a valid IBAN.',
        incorrect:
            '<span>EG1234-567890123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Egypt'
    },
    'iban-es': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Spain (ES) must start with 'ES,' followed by exactly 2 digits, and then 20 digits.",
        correct: '<span>ES1234567890123456789</span> is a valid IBAN.',
        incorrect: '<span>ES12345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Spain'
    },
    'iban-fi': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Finland (FI) must start with 'FI,' followed by exactly 2 digits, and then 14 digits.",
        correct: '<span>FI12345678901234</span> is a valid IBAN.',
        incorrect: '<span>FI123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Finland'
    },
    'iban-fo': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the Faroe Islands (FO) must start with 'FO,' followed by exactly 2 digits, and then 14 digits.",
        correct: '<span>FO12345678901234</span> is a valid IBAN.',
        incorrect: '<span>FO123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the Faroe Islands'
    },
    'iban-fr': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to France (FR) must start with 'FR,' followed by exactly 2 digits, and then 10 digits, 11 characters that can be uppercase letters (A-Z) or digits (0-9), and finally, 2 digits.",
        correct: '<span>FR1234567890ABCD12345678</span> is a valid IBAN.',
        incorrect:
            '<span>FR1234-567890ABCD12345678</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to France'
    },
    'iban-gb': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the United Kingdom (GB) must start with 'GB,' followed by exactly 2 digits, 4 uppercase letters, and 14 digits.",
        correct: '<span>GB12ABCD12345678901234</span> is a valid IBAN.',
        incorrect:
            '<span>GB1234-ABCD12345678901234</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the United Kingdom'
    },
    'iban-ge': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Georgia (GE) must start with 'GE,' followed by exactly 2 digits, 2 characters that can be uppercase letters (A-Z) or digits (0-9), and then 16 digits.",
        correct: '<span>GE12AB12CD12345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>GE1234-AB12CD12345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Georgia'
    },
    'iban-gi': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Gibraltar (GI) must start with 'GI,' followed by exactly 2 digits, 4 uppercase letters, and 15 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>GI12ABCDABCD1234567890123456</span> is a valid IBAN.',
        incorrect:
            '<span>GI1234-ABCDABCD1234567890123456</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Gibraltar'
    },
    'iban-gl': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Greenland (GL) must start with 'GL,' followed by exactly 2 digits, and then 14 digits.",
        correct: '<span>GL12345678901234</span> is a valid IBAN.',
        incorrect: '<span>GL123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Greenland'
    },
    'iban-gr': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Greece (GR) must start with 'GR,' followed by exactly 2 digits, 7 digits, and 16 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>GR123456712345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>GR1234-56712345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Greece'
    },
    'iban-gt': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Guatemala (GT) must start with 'GT,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and 20 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>GT12ABCD1234ABCD56789012345678</span> is a valid IBAN.',
        incorrect:
            '<span>GT1234-ABCD1234ABCD56789012345678</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Guatemala'
    },
    'iban-hr': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Croatia (HR) must start with 'HR,' followed by exactly 2 digits, and then 17 digits.",
        correct: '<span>HR123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>HR1234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Croatia'
    },
    'iban-hu': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Hungary (HU) must start with 'HU,' followed by exactly 2 digits, and then 24 digits.",
        correct: '<span>HU123456789012345678901234</span> is a valid IBAN.',
        incorrect:
            '<span>HU1234567890123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Hungary'
    },
    'iban-ie': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Ireland (IE) must start with 'IE,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and then 14 digits.",
        correct: '<span>IE12ABCD12345678901234567</span> is a valid IBAN.',
        incorrect:
            '<span>IE1234-ABCD12345678901234567</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Ireland'
    },
    'iban-il': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Israel (IL) must start with 'IL,' followed by exactly 2 digits, and then 19 digits.",
        correct: '<span>IL1234567890123456789</span> is a valid IBAN.',
        incorrect: '<span>IL12345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Israel'
    },
    'iban-iq': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Iraq (IQ) must start with 'IQ,' followed by exactly 2 digits, 4 uppercase letters, and 15 digits.",
        correct: '<span>IQ12ABCD1234567890123456789012</span> is a valid IBAN.',
        incorrect:
            '<span>IQ1234-ABCD1234567890123456789012</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Iraq'
    },
    'iban-ir': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Iran (IR) must start with 'IR,' followed by exactly 2 digits, '00,' and then 18 digits.",
        correct:
            '<span>IR1200123456789012345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>IR1200-123456789012345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Iran'
    },
    'iban-is': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Iceland (IS) must start with 'IS,' followed by exactly 2 digits, and then 22 digits.",
        correct: '<span>IS1234567890123456789012</span> is a valid IBAN.',
        incorrect:
            '<span>IS12345678901234567890123</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Iceland'
    },
    'iban-it': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Italy (IT) must start with 'IT,' followed by exactly 2 digits, 1 uppercase letter (A-Z), 10 digits, and 12 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>IT12A1234567890123456789012ABCD</span> is a valid IBAN.',
        incorrect:
            '<span>IT1234-1234567890123456789012ABCD</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Italy'
    },
    'iban-jo': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Jordan (JO) must start with 'JO,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 22 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>JO12ABCD1234567890123456789012345678901</span> is a valid IBAN.',
        incorrect:
            '<span>JO1234-ABCD1234567890123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Jordan'
    },
    'iban-kw': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Kuwait (KW) must start with 'KW,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 22 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>KW12ABCDABCD12345678901234567890123456</span> is a valid IBAN.',
        incorrect:
            '<span>KW1234-ABCDABCD12345678901234567890123456</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Kuwait'
    },
    'iban-kz': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Kazakhstan (KZ) must start with 'KZ,' followed by exactly 2 digits, 3 digits, and 13 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>KZ120123ABCDABCD123456789012345</span> is a valid IBAN.',
        incorrect:
            '<span>KZ120-123ABCDABCD123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Kazakhstan'
    },
    'iban-lb': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Lebanon (LB) must start with 'LB,' followed by exactly 2 digits, 4 digits, and 20 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>LB1201234567890123456789012345678901</span> is a valid IBAN.',
        incorrect:
            '<span>LB1234-5678901234567890123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Lebanon'
    },
    'iban-lc': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Saint Lucia (LC) must start with 'LC,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 24 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>LC12ABCDABCD123456789012345678901234567890123456789</span> is a valid IBAN.',
        incorrect:
            '<span>LC1234-ABCDABCD123456789012345678901234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Saint Lucia'
    },
    'iban-li': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Liechtenstein (LI) must start with 'LI,' followed by exactly 2 digits, 5 digits, and 12 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>LI1201234567890123456789012345678901</span> is a valid IBAN.',
        incorrect:
            '<span>LI1234-567890123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Liechtenstein'
    },
    'iban-lt': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Lithuania (LT) must start with 'LT,' followed by exactly 2 digits, and then 16 digits.",
        correct: '<span>LT123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>LT1234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Lithuania'
    },
    'iban-lu': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Luxembourg (LU) must start with 'LU,' followed by exactly 2 digits, 3 digits, and 13 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>LU120123ABCDABCD123456789012345</span> is a valid IBAN.',
        incorrect:
            '<span>LU120-123ABCDABCD123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Luxembourg'
    },
    'iban-lv': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Latvia (LV) must start with 'LV,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 13 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>LV12ABCD1234567890123456789012</span> is a valid IBAN.',
        incorrect:
            '<span>LV1234-ABCD1234567890123456789012</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Latvia'
    },
    'iban-ma': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Morocco (MA) must start with 'MA,' followed by 26 digits.",
        correct: '<span>MA123456789012345678901234567</span> is a valid IBAN.',
        incorrect:
            '<span>MA1234567890123456789012345678</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Morocco'
    },
    'iban-mc': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Monaco (MC) must start with 'MC,' followed by exactly 2 digits, 10 digits, 11 characters that can be uppercase letters (A-Z) or digits (0-9), and then 2 digits.",
        correct: '<span>MC1201234567890ABCD12345678</span> is a valid IBAN.',
        incorrect:
            '<span>MC1234-567890ABCD12345678</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Monaco'
    },
    'iban-md': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Moldova (MD) must start with 'MD,' followed by exactly 2 digits and 20 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>MD120123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>MD1234-56789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Moldova'
    },
    'iban-me': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Montenegro (ME) must start with 'ME,' followed by exactly 2 digits and 18 digits.",
        correct: '<span>ME120123456789012345</span> is a valid IBAN.',
        incorrect: '<span>ME1234-5678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Montenegro'
    },
    'iban-mk': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to North Macedonia (MK) must start with 'MK,' followed by exactly 2 digits, 3 digits, 10 characters that can be uppercase letters (A-Z) or digits (0-9), and then 2 digits.",
        correct: '<span>MK120123456ABCDABCD12</span> is a valid IBAN.',
        incorrect: '<span>MK1234-123456ABCDABCD12</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to North Macedonia'
    },
    'iban-mr': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Mauritania (MR) must start with 'MR,' followed by exactly 2 digits and 23 digits.",
        correct: '<span>MR12012345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>MR1234-567890123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Mauritania'
    },
    'iban-mt': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Malta (MT) must start with 'MT,' followed by exactly 2 digits, 4 uppercase letters (A-Z), 5 digits, and 18 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>MT12ABCD123451234567890123456789012</span> is a valid IBAN.',
        incorrect:
            '<span>MT1234-ABCD123451234567890123456789012</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Malta'
    },
    'iban-mu': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Mauritius (MU) must start with 'MU,' followed by exactly 2 digits, 4 uppercase letters (A-Z), 19 digits, and 3 uppercase letters (A-Z).",
        correct: '<span>MU12ABCD1234567890123456ABC</span> is a valid IBAN.',
        incorrect:
            '<span>MU1234-ABCD1234567890123456ABC</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Mauritius'
    },
    'iban-mz': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Mozambique (MZ) must start with 'MZ,' followed by exactly 2 digits and 21 digits.",
        correct: '<span>MZ120123456789012345678</span> is a valid IBAN.',
        incorrect:
            '<span>MZ1234-567890123456789012</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Mozambique'
    },
    'iban-nl': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the Netherlands (NL) must start with 'NL,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 10 digits.",
        correct: '<span>NL120123ABCD1234567890</span> is a valid IBAN.',
        incorrect: '<span>NL1234-ABCD1234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the Netherlands'
    },
    'iban-no': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Norway (NO) must start with 'NO,' followed by exactly 2 digits, and then 11 digits.",
        correct: '<span>NO12012345678</span> is a valid IBAN.',
        incorrect: '<span>NO1234-567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Norway'
    },
    'iban-pk': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Pakistan (PK) must start with 'PK,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and then 16 digits.",
        correct:
            '<span>PK12ABCD1234ABCD1234567890123456</span> is a valid IBAN.',
        incorrect:
            '<span>PK1234-ABCD1234ABCD1234567890123456</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Pakistan'
    },
    'iban-pl': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Poland (PL) must start with 'PL,' followed by exactly 2 digits, and then 24 digits.",
        correct: '<span>PL1201234567890123456789012</span> is a valid IBAN.',
        incorrect:
            '<span>PL1234-567890123456789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Poland'
    },
    'iban-ps': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Palestine (PS) must start with 'PS,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and then 21 digits.",
        correct:
            '<span>PS12ABCDABCD1234567890123456789012345678901</span> is a valid IBAN.',
        incorrect:
            '<span>PS1234-ABCDABCD1234567890123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Palestine'
    },
    'iban-pt': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Portugal (PT) must start with 'PT,' followed by exactly 2 digits, and then 21 digits.",
        correct: '<span>PT120123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>PT1234-56789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Portugal'
    },
    'iban-qa': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Qatar (QA) must start with 'QA,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 21 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>QA12ABCDABCD1234567890123456789012345678901</span> is a valid IBAN.',
        incorrect:
            '<span>QA1234-ABCDABCD1234567890123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Qatar'
    },
    'iban-ro': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Romania (RO) must start with 'RO,' followed by exactly 2 digits, 4 uppercase letters (A-Z), and 16 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>RO12ABCDABCD123456789012345678901</span> is a valid IBAN.',
        incorrect:
            '<span>RO1234-ABCDABCD123456789012345678901</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Romania'
    },
    'iban-rs': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Serbia (RS) must start with 'RS,' followed by exactly 2 digits, and then 18 digits.",
        correct: '<span>RS120123456789012345</span> is a valid IBAN.',
        incorrect: '<span>RS1234-5678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Serbia'
    },
    'iban-sa': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Saudi Arabia (SA) must start with 'SA,' followed by exactly 2 digits, 2 digits, and 18 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>SA1200123456789012345678</span> is a valid IBAN.',
        incorrect:
            '<span>SA1234-0123456789012345678</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Saudi Arabia'
    },
    'iban-sc': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Seychelles (SC) must start with 'SC,' followed by exactly 2 digits, 4 uppercase letters (A-Z), 20 digits, and 3 uppercase letters (A-Z).",
        correct: '<span>SC12ABCD1234567890123456ABC</span> is a valid IBAN.',
        incorrect:
            '<span>SC1234-ABCD1234567890123456ABC</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Seychelles'
    },
    'iban-se': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Sweden (SE) must start with 'SE,' followed by exactly 2 digits, and then 20 digits.",
        correct: '<span>SE12012345678901234567</span> is a valid IBAN.',
        incorrect: '<span>SE1234-5678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Sweden'
    },
    'iban-si': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Slovenia (SI) must start with 'SI,' followed by exactly 2 digits, and then 15 digits.",
        correct: '<span>SI120123456789012</span> is a valid IBAN.',
        incorrect: '<span>SI1234-56789012345</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Slovenia'
    },
    'iban-sk': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Slovakia (SK) must start with 'SK,' followed by exactly 2 digits, and then 20 digits.",
        correct: '<span>SK12012345678901234567</span> is a valid IBAN.',
        incorrect: '<span>SK1234-5678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Slovakia'
    },
    'iban-sm': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to San Marino (SM) must start with 'SM,' followed by exactly 2 digits, 1 uppercase letter (A-Z), 10 digits, and 12 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct: '<span>SM120A123456789012345678901234</span> is a valid IBAN.',
        incorrect:
            '<span>SM1234-ABCD123456789012345678901234</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to San Marino'
    },
    'iban-sv': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to El Salvador (SV) must start with 'SV,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and then 20 digits.",
        correct:
            '<span>SV12ABCD1234ABCD12345678901234567890</span> is a valid IBAN.',
        incorrect:
            '<span>SV1234-ABCD1234ABCD12345678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to El Salvador'
    },
    'iban-tl': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Timor-Leste (TL) must start with 'TL,' followed by exactly 2 digits, and then 19 digits.",
        correct: '<span>TL1201234567890123456</span> is a valid IBAN.',
        incorrect: '<span>TL1234-567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Timor-Leste'
    },
    'iban-tn': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Tunisia (TN) must start with 'TN,' followed by exactly 2 digits, and then 20 digits.",
        correct: '<span>TN120123456789012345678</span> is a valid IBAN.',
        incorrect: '<span>TN1234-5678901234567890</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Tunisia'
    },
    'iban-tr': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Turkey (TR) must start with 'TR,' followed by exactly 2 digits, 5 digits, and 17 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>TR12012345ABCD1234567890123456789</span> is a valid IBAN.',
        incorrect:
            '<span>TR1234-5678ABCD1234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Turkey'
    },
    'iban-ua': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Ukraine (UA) must start with 'UA,' followed by exactly 2 digits, 6 digits, and 19 characters that can be uppercase letters (A-Z) or digits (0-9).",
        correct:
            '<span>UA120123456ABCD1234567890123456789</span> is a valid IBAN.',
        incorrect:
            '<span>UA1234-56ABCD1234567890123456789</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Ukraine'
    },
    'iban-va': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Vatican City (VA) must start with 'VA,' followed by exactly 2 digits, and then 18 digits.",
        correct: '<span>VA120123456789012345</span> is a valid IBAN.',
        incorrect: '<span>VA1234-5678901234567</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Vatican City'
    },
    'iban-vg': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to the British Virgin Islands (VG) must start with 'VG,' followed by exactly 2 digits, 4 characters that can be uppercase letters (A-Z) or digits (0-9), and then 16 digits.",
        correct:
            '<span>VG12ABCD1234ABCD1234567890123456</span> is a valid IBAN.',
        incorrect:
            '<span>VG1234-ABCD1234ABCD1234567890123456</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to the British Virgin Islands'
    },
    'iban-xk': {
        info: "Enter a valid/invalid IBAN number to test. A valid IBAN number specific to Kosovo (XK) must start with 'XK,' followed by exactly 2 digits, and then 16 digits.",
        correct: '<span>XK1201234567890123</span> is a valid IBAN.',
        incorrect: '<span>XK1234-5678901234</span> is not a valid IBAN.',
        description:
            'Used for validating IBAN (International Bank Account Number) codes specific to Kosovo'
    }
} as any;
