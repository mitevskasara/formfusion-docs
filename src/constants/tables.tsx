import TYPES_INFO from '@/constants/types';
import PATTERNS_INFO from '@/constants/patterns';

export const TYPES_TABLE_HEADERS = ['Type', 'Description'];

export const typesToTableData = (RFMtypes: any) =>
    RFMtypes
        ? [
              ...Object.keys(RFMtypes).map((type) => {
                  return TYPES_INFO[type]
                      ? {
                            type: {
                                text: `<code>${type}</code>`,
                                node: true
                            },
                            desc: TYPES_INFO[type]?.description || null
                        }
                      : null;
              })
          ]
        : [];

export const PATTERNS_TABLE_HEADERS = ['Type', 'Description'];

export const patternsToTableData = (RFMPatterns: any) => {
    return RFMPatterns
        ? [
              ...Object.keys(RFMPatterns).map((type) => {
                  return !type.startsWith('postalCode') &&
                      !type.startsWith('iban') &&
                      PATTERNS_INFO[type]
                      ? {
                            type: {
                                text: `<code>${type}</code>`,
                                node: true
                            },
                            desc: PATTERNS_INFO[type]?.description || null
                        }
                      : null;
              }),
              ...Object.keys(RFMPatterns.postalCode).map((code) =>
                  PATTERNS_INFO[`postalCode.${code}`]
                      ? {
                            type: {
                                text: `<code>postalCode.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`postalCode.${code}`]
                                    ?.description || null
                        }
                      : null
              ),
              ...Object.keys(RFMPatterns.iban).map((code) =>
                  PATTERNS_INFO[`iban.${code}`]
                      ? {
                            type: {
                                text: `<code>iban.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`iban.${code}`]?.description ||
                                null
                        }
                      : null
              )
          ]
        : [];
};
