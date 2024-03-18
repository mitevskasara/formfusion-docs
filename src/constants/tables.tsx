import TYPES_INFO from '@/constants/types';
import PATTERNS_INFO from '@/constants/patterns';

export const TYPES_TABLE_HEADERS = ['Type', 'Description'];

export const typesToTableData = (RFMtypes: any) =>
    RFMtypes
        ? [
              ...Object.keys(RFMtypes).map((type) => {
                  return PATTERNS_INFO[type]
                      ? {
                            type: {
                                text: `<code>${type}</code>`,
                                node: true
                            },
                            desc: PATTERNS_INFO[type]?.description || null
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
                  return !type.startsWith('iban') &&
                      !type.startsWith('licencePlates') &&
                      !type.startsWith('postcodes') &&
                      !type.startsWith('passports') &&
                      !type.startsWith('tin') &&
                      !type.startsWith('vat') &&
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
              ...Object.keys(RFMPatterns.postcodes).map((code) =>
                  PATTERNS_INFO[`postcodes.${code}`]
                      ? {
                            type: {
                                text: `<code>postcodes.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`postcodes.${code}`]
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
              ),
              ...Object.keys(RFMPatterns.licencePlates).map((code) =>
                  PATTERNS_INFO[`licencePlates.${code}`]
                      ? {
                            type: {
                                text: `<code>licencePlates.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`licencePlates.${code}`]
                                    ?.description || null
                        }
                      : null
              ),
              ...Object.keys(RFMPatterns.passports).map((code) =>
                  PATTERNS_INFO[`passports.${code}`]
                      ? {
                            type: {
                                text: `<code>passports.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`passports.${code}`]
                                    ?.description || null
                        }
                      : null
              ),
              ...Object.keys(RFMPatterns.tin).map((code) =>
                  PATTERNS_INFO[`tin.${code}`]
                      ? {
                            type: {
                                text: `<code>tin.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`tin.${code}`]?.description ||
                                null
                        }
                      : null
              ),
              ...Object.keys(RFMPatterns.vat).map((code) =>
                  PATTERNS_INFO[`vat.${code}`]
                      ? {
                            type: {
                                text: `<code>vat.${code}</code>`,
                                node: true
                            },
                            desc:
                                PATTERNS_INFO[`vat.${code}`]?.description ||
                                null
                        }
                      : null
              )
          ]
        : [];
};
