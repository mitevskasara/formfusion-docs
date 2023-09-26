import Property from '@/components/Property';
import TYPES_INFO from '@/constants/types';
import PATTERNS_INFO from '@/constants/patterns';

export const TYPES_TABLE_HEADERS = ['Type', 'Description'];

export const typesToTableData = (RFMtypes: any) =>
    RFMtypes
        ? [
              ...Object.keys(RFMtypes).map((type) => {
                  return !type.startsWith('postal-code')
                      ? {
                            type: <Property>{type} </Property>,
                            desc: TYPES_INFO[type].description
                        }
                      : {};
              }),
              {
                  type: <Property>{`postal-code-{country_code}`}</Property>,
                  desc: TYPES_INFO['postal-code'].description
              }
          ]
        : [];

export const PATTERNS_TABLE_HEADERS = ['Type', 'Description'];

export const patternsToTableData = (RFMPatterns: any) =>
    RFMPatterns
        ? [
              ...Object.keys(RFMPatterns).map((type) => {
                  return !type.startsWith('postalCode')
                      ? {
                            type: <Property>{type}</Property>,
                            desc: PATTERNS_INFO[type]?.description
                        }
                      : {};
              }),
              {
                  type: <Property>postalCode</Property>,
                  desc: PATTERNS_INFO['postalCode'].description
              }
          ]
        : [];
