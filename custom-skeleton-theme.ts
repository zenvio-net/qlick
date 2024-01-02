import type {CustomThemeConfig} from "@skeletonlabs/tw-plugin";

export const customSkeletonTheme: CustomThemeConfig = {
  name: "custom-skeleton-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "2px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #9daa69
    "--color-primary-50": "240 242 233", // #f0f2e9
    "--color-primary-100": "235 238 225", // #ebeee1
    "--color-primary-200": "231 234 218", // #e7eada
    "--color-primary-300": "216 221 195", // #d8ddc3
    "--color-primary-400": "186 196 150", // #bac496
    "--color-primary-500": "157 170 105", // #9daa69
    "--color-primary-600": "141 153 95", // #8d995f
    "--color-primary-700": "118 128 79", // #76804f
    "--color-primary-800": "94 102 63", // #5e663f
    "--color-primary-900": "77 83 51", // #4d5333
    // secondary | #b50587
    "--color-secondary-50": "244 218 237", // #f4daed
    "--color-secondary-100": "240 205 231", // #f0cde7
    "--color-secondary-200": "237 193 225", // #edc1e1
    "--color-secondary-300": "225 155 207", // #e19bcf
    "--color-secondary-400": "203 80 171", // #cb50ab
    "--color-secondary-500": "181 5 135", // #b50587
    "--color-secondary-600": "163 5 122", // #a3057a
    "--color-secondary-700": "136 4 101", // #880465
    "--color-secondary-800": "109 3 81", // #6d0351
    "--color-secondary-900": "89 2 66", // #590242
    // tertiary | #24934b
    "--color-tertiary-50": "222 239 228", // #deefe4
    "--color-tertiary-100": "211 233 219", // #d3e9db
    "--color-tertiary-200": "200 228 210", // #c8e4d2
    "--color-tertiary-300": "167 212 183", // #a7d4b7
    "--color-tertiary-400": "102 179 129", // #66b381
    "--color-tertiary-500": "36 147 75", // #24934b
    "--color-tertiary-600": "32 132 68", // #208444
    "--color-tertiary-700": "27 110 56", // #1b6e38
    "--color-tertiary-800": "22 88 45", // #16582d
    "--color-tertiary-900": "18 72 37", // #124825
    // success | #4cf9e9
    "--color-success-50": "228 254 252", // #e4fefc
    "--color-success-100": "219 254 251", // #dbfefb
    "--color-success-200": "210 254 250", // #d2fefa
    "--color-success-300": "183 253 246", // #b7fdf6
    "--color-success-400": "130 251 240", // #82fbf0
    "--color-success-500": "76 249 233", // #4cf9e9
    "--color-success-600": "68 224 210", // #44e0d2
    "--color-success-700": "57 187 175", // #39bbaf
    "--color-success-800": "46 149 140", // #2e958c
    "--color-success-900": "37 122 114", // #257a72
    // warning | #df7410
    "--color-warning-50": "250 234 219", // #faeadb
    "--color-warning-100": "249 227 207", // #f9e3cf
    "--color-warning-200": "247 220 195", // #f7dcc3
    "--color-warning-300": "242 199 159", // #f2c79f
    "--color-warning-400": "233 158 88", // #e99e58
    "--color-warning-500": "223 116 16", // #df7410
    "--color-warning-600": "201 104 14", // #c9680e
    "--color-warning-700": "167 87 12", // #a7570c
    "--color-warning-800": "134 70 10", // #86460a
    "--color-warning-900": "109 57 8", // #6d3908
    // error | #94234f
    "--color-error-50": "239 222 229", // #efdee5
    "--color-error-100": "234 211 220", // #ead3dc
    "--color-error-200": "228 200 211", // #e4c8d3
    "--color-error-300": "212 167 185", // #d4a7b9
    "--color-error-400": "180 101 132", // #b46584
    "--color-error-500": "148 35 79", // #94234f
    "--color-error-600": "133 32 71", // #852047
    "--color-error-700": "111 26 59", // #6f1a3b
    "--color-error-800": "89 21 47", // #59152f
    "--color-error-900": "73 17 39", // #491127
    // surface | #272854
    "--color-surface-50": "223 223 229", // #dfdfe5
    "--color-surface-100": "212 212 221", // #d4d4dd
    "--color-surface-200": "201 201 212", // #c9c9d4
    "--color-surface-300": "169 169 187", // #a9a9bb
    "--color-surface-400": "104 105 135", // #686987
    "--color-surface-500": "39 40 84", // #272854
    "--color-surface-600": "35 36 76", // #23244c
    "--color-surface-700": "29 30 63", // #1d1e3f
    "--color-surface-800": "23 24 50", // #171832
    "--color-surface-900": "19 20 41", // #131429
  },
};
