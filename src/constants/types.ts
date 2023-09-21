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
    username: {
        info: 'Enter a valid/invalid username to test. A valid user name usually contains of alphanumeric characters\
    a @ _ or - but not spaces. For example:',
        correct: '<span>my_user_name</span> is a valid username',
        incorrect: '<span>my username!</span> is not a valid username',
        description:
            'Used for username fields. A valid username is considered to contain only alphanumeric characters,\
    a @ _ or -'
    },
    'credit-card-number': {
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
    'postal-code': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a United Kingdom\
    postcode',
        correct: '<span>123-45-6789</span> is a valid postal code',
        incorrect: '<span>123456789</span> is not a valid postal code',
        description:
            "Field of type postal code with validation for each country's postal code. \
  To use it, just replace the country_code with the code of the country you want to use it. For example:\
  postal-code-gb, postal-code-fr, postal-code-de etc."
    },
    'postal-code-ad': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Andorra postal code',
        correct: '<span>AD500</span> is a valid postal code',
        incorrect: '<span>AD5004123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ar': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Argentina postal code',
        correct: '<span>9017</span> is a valid postal code',
        incorrect: '<span>90171123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-at': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Austria postal code',
        correct: '<span>9341</span> is a valid postal code',
        incorrect: '<span>93410123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-au': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Australia postal code',
        correct: '<span>2137</span> is a valid postal code',
        incorrect: '<span>21371123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ax': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Åland Islands postal code',
        correct: '<span>22310</span> is a valid postal code',
        incorrect: '<span>223102123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-az': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Azerbaijan postal code',
        correct: '<span>AZ 0528</span> is a valid postal code',
        incorrect: '<span>AZ 05282123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-bd': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Bangladesh postal code',
        correct: '<span>1362</span> is a valid postal code',
        incorrect: '<span>13621123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-be': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Belgium postal code',
        correct: '<span>2180</span> is a valid postal code',
        incorrect: '<span>21807123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-bg': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Bulgaria postal code',
        correct: '<span>8444</span> is a valid postal code',
        incorrect: '<span>84444123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-bm': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Bermuda postal code',
        correct: '<span>MA 05</span> is a valid postal code',
        incorrect: '<span>MA 052123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-br': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Brazil postal code',
        correct: '<span>48760-000</span> is a valid postal code',
        incorrect: '<span>48760-0005123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-by': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Belarus postal code',
        correct: '<span>211081</span> is a valid postal code',
        incorrect: '<span>2110816123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ca': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Canada postal code',
        correct: '<span>T1Z</span> is a valid postal code',
        incorrect: '<span>T1Z2123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ch': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Switzerland postal code',
        correct: '<span>3942</span> is a valid postal code',
        incorrect: '<span>39427123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-cl': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Chile postal code',
        correct: '<span>2900000</span> is a valid postal code',
        incorrect: '<span>29000006123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-cn': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a China postal code',
        correct: '<span>226000</span> is a valid postal code',
        incorrect: '<span>2260008123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-co': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Colombia postal code',
        correct: '<span>916017</span> is a valid postal code',
        incorrect: '<span>9160173123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-cr': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Costa Rica postal code',
        correct: '<span>20503</span> is a valid postal code',
        incorrect: '<span>205035123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-cy': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Cyprus postal code',
        correct: '<span>1049</span> is a valid postal code',
        incorrect: '<span>10495123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-cz': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Czech Republic postal code',
        correct: '<span>294 04</span> is a valid postal code',
        incorrect: '<span>294 046123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-de': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Germany postal code',
        correct: '<span>21395</span> is a valid postal code',
        incorrect: '<span>213954123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-dk': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Denmark postal code',
        correct: '<span>1123</span> is a valid postal code',
        incorrect: '<span>11232123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-do': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Dominican Republic postal code',
        correct: '<span>10121</span> is a valid postal code',
        incorrect: '<span>101211123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-dz': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Algeria postal code',
        correct: '<span>24045</span> is a valid postal code',
        incorrect: '<span>240451123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ee': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Estonia postal code',
        correct: '<span>75019</span> is a valid postal code',
        incorrect: '<span>750197123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-es': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Spain postal code',
        correct: '<span>32839</span> is a valid postal code',
        incorrect: '<span>328394123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-fi': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Finland postal code',
        correct: '<span>94400</span> is a valid postal code',
        incorrect: '<span>944000123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-fm': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Micronesia postal code',
        correct: '<span>96944</span> is a valid postal code',
        incorrect: '<span>969447123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-fo': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Faroe Islands postal code',
        correct: '<span>511</span> is a valid postal code',
        incorrect: '<span>5115123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-fr': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a France postal code',
        correct: '<span>75015</span> is a valid postal code',
        incorrect: '<span>750157123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gb': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a United Kingdom postal code',
        correct: '<span>AB22</span> is a valid postal code',
        incorrect: '<span>AB227123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gf': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a French Guiana postal code',
        correct: '<span>97338 CEDEX</span> is a valid postal code',
        incorrect: '<span>97338 CEDEX6123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gg': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Guernsey postal code',
        correct: '<span>GY4</span> is a valid postal code',
        incorrect: '<span>GY47123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gl': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Greenland postal code',
        correct: '<span>3910</span> is a valid postal code',
        incorrect: '<span>39100123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gp': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Guadeloupe postal code',
        correct: '<span>97122</span> is a valid postal code',
        incorrect: '<span>971224123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gt': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Guatemala postal code',
        correct: '<span>20012</span> is a valid postal code',
        incorrect: '<span>200123123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-gu': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Guam postal code',
        correct: '<span>96932</span> is a valid postal code',
        incorrect: '<span>969323123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-hr': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Croatia postal code',
        correct: '<span>10342</span> is a valid postal code',
        incorrect: '<span>103422123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ht': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Haiti postal code',
        correct: '<span>HT4323</span> is a valid postal code',
        incorrect: '<span>HT43233123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-hu': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Hungary postal code',
        correct: '<span>7735</span> is a valid postal code',
        incorrect: '<span>77357123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ie': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Ireland postal code',
        correct: '<span>P43</span> is a valid postal code',
        incorrect: '<span>P432123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-im': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Isle of Man postal code',
        correct: '<span>IM4</span> is a valid postal code',
        incorrect: '<span>IM47123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-in': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a India postal code',
        correct: '<span>585321</span> is a valid postal code',
        incorrect: '<span>5853214123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-is': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Iceland postal code',
        correct: '<span>127</span> is a valid postal code',
        incorrect: '<span>1275123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-it': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Italy postal code',
        correct: '<span>33081</span> is a valid postal code',
        incorrect: '<span>330810123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-je': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Jersey postal code',
        correct: '<span>JE2</span> is a valid postal code',
        incorrect: '<span>JE22123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-jp': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Japan postal code',
        correct: '<span>518-0437</span> is a valid postal code',
        incorrect: '<span>518-04376123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ki': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Kiribati postal code',
        correct: '<span>KI0102</span> is a valid postal code',
        incorrect: '<span>KI01025123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-kr': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a South Korea postal code',
        correct: '<span>51324</span> is a valid postal code',
        incorrect: '<span>513241123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ky': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Cayman Islands postal code',
        correct: '<span>KY2</span> is a valid postal code',
        incorrect: '<span>KY22123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-li': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Liechtenstein postal code',
        correct: '<span>9485</span> is a valid postal code',
        incorrect: '<span>94857123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-lk': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Sri Lanka postal code',
        correct: '<span>20094</span> is a valid postal code',
        incorrect: '<span>200944123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-lt': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Lithuania postal code',
        correct: '<span>67027</span> is a valid postal code',
        incorrect: '<span>670277123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-lu': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Luxembourg postal code',
        correct: '<span>L-8286</span> is a valid postal code',
        incorrect: '<span>L-82864123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-lv': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Latvia postal code',
        correct: '<span>LV-3914</span> is a valid postal code',
        incorrect: '<span>LV-39142123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ma': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Morocco postal code',
        correct: '<span>94025</span> is a valid postal code',
        incorrect: '<span>940255123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-md': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Moldova postal code',
        correct: '<span>MD-5621</span> is a valid postal code',
        incorrect: '<span>MD-56212123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mh': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Marshall Islands postal code',
        correct: '<span>96960</span> is a valid postal code',
        incorrect: '<span>969600123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mk': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a North Macedonia postal code',
        correct: '<span>1488</span> is a valid postal code',
        incorrect: '<span>14885123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mp': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Northern Mariana Islands postal code',
        correct: '<span>96951</span> is a valid postal code',
        incorrect: '<span>969515123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mq': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Martinique postal code',
        correct: '<span>97261 CEDEX</span> is a valid postal code',
        incorrect: '<span>97261 CEDEX8123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mt': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Malta postal code',
        correct: '<span>MST</span> is a valid postal code',
        incorrect: '<span>MST7123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mw': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Malawi postal code',
        correct: '<span>201110</span> is a valid postal code',
        incorrect: '<span>2011106123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-mx': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Mexico postal code',
        correct: '<span>28134</span> is a valid postal code',
        incorrect: '<span>281348123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-my': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Malaysia postal code',
        correct: '<span>79681</span> is a valid postal code',
        incorrect: '<span>796815123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-nc': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a New Caledonia postal code',
        correct: '<span>98816</span> is a valid postal code',
        incorrect: '<span>988165123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-nl': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Netherlands postal code',
        correct: '<span>3763</span> is a valid postal code',
        incorrect: '<span>37634123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-no': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Norway postal code',
        correct: '<span>6521</span> is a valid postal code',
        incorrect: '<span>65216123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-nz': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a New Zealand postal code',
        correct: '<span>0910</span> is a valid postal code',
        incorrect: '<span>09105123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-pe': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Peru postal code',
        correct: '<span>13135</span> is a valid postal code',
        incorrect: '<span>131357123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ph': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Philippines postal code',
        correct: '<span>0870</span> is a valid postal code',
        incorrect: '<span>08707123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-pk': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Pakistan postal code',
        correct: '<span>84710</span> is a valid postal code',
        incorrect: '<span>847108123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-pl': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Poland postal code',
        correct: '<span>58-241</span> is a valid postal code',
        incorrect: '<span>58-2415123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-pr': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Puerto Rico postal code',
        correct: '<span>00785</span> is a valid postal code',
        incorrect: '<span>007856123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-pt': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Portugal postal code',
        correct: '<span>3750-054</span> is a valid postal code',
        incorrect: '<span>3750-0545123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-re': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Réunion postal code',
        correct: '<span>97421</span> is a valid postal code',
        incorrect: '<span>974211123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ro': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Romania postal code',
        correct: '<span>237531</span> is a valid postal code',
        incorrect: '<span>2375310123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-rs': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Serbia postal code',
        correct: '<span>11235</span> is a valid postal code',
        incorrect: '<span>112351123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ru': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Russia postal code',
        correct: '<span>175111</span> is a valid postal code',
        incorrect: '<span>1751113123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-se': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Sweden postal code',
        correct: '<span>186 97</span> is a valid postal code',
        incorrect: '<span>186 970123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-sg': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Singapore postal code',
        correct: '<span>768315</span> is a valid postal code',
        incorrect: '<span>7683153123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-si': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Slovenia postal code',
        correct: '<span>1504</span> is a valid postal code',
        incorrect: '<span>15041123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-sj': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Svalbard and Jan Mayen postal code',
        correct: '<span>9173</span> is a valid postal code',
        incorrect: '<span>91732123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-sk': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Slovakia postal code',
        correct: '<span>969 01</span> is a valid postal code',
        incorrect: '<span>969 018123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-sm': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a San Marino postal code',
        correct: '<span>47890</span> is a valid postal code',
        incorrect: '<span>478901123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-th': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Thailand postal code',
        correct: '<span>16130</span> is a valid postal code',
        incorrect: '<span>161303123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-tr': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Turkey postal code',
        correct: '<span>67300</span> is a valid postal code',
        incorrect: '<span>673006123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-ua': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Ukraine postal code',
        correct: '<span>75731</span> is a valid postal code',
        incorrect: '<span>757316123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-us': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a United States postal code',
        correct: '<span>36442</span> is a valid postal code',
        incorrect: '<span>364426123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-uy': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Uruguay postal code',
        correct: '<span>55100</span> is a valid postal code',
        incorrect: '<span>551007123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-vi': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a United States Virgin Islands postal code',
        correct: '<span>00831</span> is a valid postal code',
        incorrect: '<span>008312123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-wf': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Wallis and Futuna postal code',
        correct: '<span>98600</span> is a valid postal code',
        incorrect: '<span>986003123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-yt': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a Mayotte postal code',
        correct: '<span>97630</span> is a valid postal code',
        incorrect: '<span>976300123</span> is not a valid postal code',
        description: ''
    },
    'postal-code-za': {
        info: 'Enter a valid/invalid postal code for a specific country to test. This example validates a South Africa postal code',
        correct: '<span>0010</span> is a valid postal code',
        incorrect: '<span>00105123</span> is not a valid postal code',
        description: ''
    }
} as any;
