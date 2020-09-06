/*
const cpm = [
  0xc3, 0x11, 0xec, 0x99, 0xec, 0xa5, 0xec, 0xab, 0xec, 0xb1, 0xec,
  0xeb, 0x22, 0x3b, 0xef, 0xeb, 0x7b, 0x32, 0xce, 0xf9, 0x21, 0x00, 0x00, 0x22, 0x3d, 0xef, 0x39,
  0x22, 0x07, 0xef, 0x31, 0x39, 0xef, 0xaf, 0x32, 0xd8, 0xf9, 0x32, 0xd6, 0xf9, 0x21, 0x6c, 0xf9,
  0xe5, 0x79, 0xfe, 0x29, 0xd0, 0x4b, 0x21, 0x47, 0xec, 0x5f, 0x16, 0x00, 0x19, 0x19, 0x5e, 0x23,
  0x56, 0x2a, 0x3b, 0xef, 0xeb, 0xe9, 0x03, 0xfa, 0xc0, 0xee, 0x90, 0xed, 0xc6, 0xee, 0x12, 0xfa,
  0x0f, 0xfa, 0xcc, 0xee, 0xe5, 0xee, 0xeb, 0xee, 0xf0, 0xee, 0xe1, 0xed, 0xf6, 0xee, 0x76, 0xf8,
  0x7b, 0xf8, 0x3d, 0xf8, 0x94, 0xf8, 0x9d, 0xf8, 0xa3, 0xf8, 0xc0, 0xf8, 0xcf, 0xf8, 0xd8, 0xf8,
  0xde, 0xf8, 0xe4, 0xf8, 0xed, 0xf8, 0xf6, 0xf8, 0xfc, 0xf8, 0x02, 0xf9, 0x09, 0xf9, 0x24, 0xf1,
  0x0f, 0xf9, 0x15, 0xf9, 0x1e, 0xf9, 0x25, 0xf9, 0x39, 0xf9, 0x3f, 0xf9, 0x45, 0xf9, 0x06, 0xf8,
  0x4b, 0xf9, 0xfc, 0xee, 0xfc, 0xee, 0x93, 0xf9, 0x21, 0xca, 0xec, 0xcd, 0xe5, 0xec, 0xfe, 0x03,
  0xca, 0x00, 0x00, 0xc9, 0x21, 0xd5, 0xec, 0xc3, 0xb4, 0xec, 0x21, 0xe1, 0xec, 0xc3, 0xb4, 0xec,
  0x21, 0xdc, 0xec, 0xcd, 0xe5, 0xec, 0xc3, 0x00, 0x00, 0x42, 0x64, 0x6f, 0x73, 0x20, 0x45, 0x72,
  0x72, 0x20, 0x4f, 0x6e, 0x20, 0x20, 0x3a, 0x20, 0x24, 0x42, 0x61, 0x64, 0x20, 0x53, 0x65, 0x63,
  0x74, 0x6f, 0x72, 0x24, 0x53, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x24, 0x46, 0x69, 0x6c, 0x65, 0x20,
  0x52, 0x2f, 0x4f, 0x24, 0xe5, 0xcd, 0xc9, 0xed, 0x3a, 0x3a, 0xef, 0xc6, 0x41, 0x32, 0xc6, 0xec,
  0x01, 0xba, 0xec, 0xcd, 0xd3, 0xed, 0xc1, 0xcd, 0xd3, 0xed, 0x21, 0x06, 0xef, 0x7e, 0x36, 0x00,
  0xb7, 0xc0, 0xc3, 0x09, 0xfa, 0xcd, 0xfb, 0xec, 0xcd, 0x14, 0xed, 0xd8, 0xf5, 0x4f, 0xcd, 0x90];
*/
const cpm = [
    0x1a,
    0xfe, '$'.charCodeAt(0),
    0xc8,
    0xd3, 0x01,
    0x13,
    0xc3, 0x06, 0xec,
];
const cpu_diag = [
    0xc3, 0xab, 0x01, 0x4d, 0x49, 0x43, 0x52, 0x4f, 0x43, 0x4f, 0x53, 0x4d,
    0x20, 0x41, 0x53, 0x53, 0x4f, 0x43, 0x49, 0x41, 0x54, 0x45, 0x53, 0x20,
    0x38, 0x30, 0x38, 0x30, 0x2f, 0x38, 0x30, 0x38, 0x35, 0x20, 0x43, 0x50,
    0x55, 0x20, 0x44, 0x49, 0x41, 0x47, 0x4e, 0x4f, 0x53, 0x54, 0x49, 0x43,
    0x20, 0x56, 0x45, 0x52, 0x53, 0x49, 0x4f, 0x4e, 0x20, 0x31, 0x2e, 0x30,
    0x20, 0x28, 0x43, 0x29, 0x20, 0x31, 0x39, 0x38, 0x30, 0xd5, 0xeb, 0x0e,
    0x09, 0xcd, 0x05, 0x00, 0xd1, 0xc9, 0x0e, 0x02, 0xcd, 0x05, 0x00, 0xc9,
    0xf5, 0xcd, 0x64, 0x01, 0x5f, 0xcd, 0x4e, 0x01, 0xf1, 0xcd, 0x68, 0x01,
    0x5f, 0xc3, 0x4e, 0x01, 0x0f, 0x0f, 0x0f, 0x0f, 0xe6, 0x0f, 0xfe, 0x0a,
    0xfa, 0x71, 0x01, 0xc6, 0x07, 0xc6, 0x30, 0xc9, 0x0c, 0x0d, 0x0a, 0x20,
    0x43, 0x50, 0x55, 0x20, 0x49, 0x53, 0x20, 0x4f, 0x50, 0x45, 0x52, 0x41,
    0x54, 0x49, 0x4f, 0x4e, 0x41, 0x4c, 0x24, 0x0c, 0x0d, 0x0a, 0x20, 0x43,
    0x50, 0x55, 0x20, 0x48, 0x41, 0x53, 0x20, 0x46, 0x41, 0x49, 0x4c, 0x45,
    0x44, 0x21, 0x20, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x20, 0x45, 0x58, 0x49,
    0x54, 0x3d, 0x24, 0x31, 0xad, 0x07, 0xe6, 0x00, 0xca, 0xb6, 0x01, 0xcd,
    0x89, 0x06, 0xd2, 0xbc, 0x01, 0xcd, 0x89, 0x06, 0xea, 0xc2, 0x01, 0xcd,
    0x89, 0x06, 0xf2, 0xc8, 0x01, 0xcd, 0x89, 0x06, 0xc2, 0xd7, 0x01, 0xda,
    0xd7, 0x01, 0xe2, 0xd7, 0x01, 0xfa, 0xd7, 0x01, 0xc3, 0xda, 0x01, 0xcd,
    0x89, 0x06, 0xc6, 0x06, 0xc2, 0xe2, 0x01, 0xcd, 0x89, 0x06, 0xda, 0xeb,
    0x01, 0xe2, 0xeb, 0x01, 0xf2, 0xee, 0x01, 0xcd, 0x89, 0x06, 0xc6, 0x70,
    0xe2, 0xf6, 0x01, 0xcd, 0x89, 0x06, 0xfa, 0xff, 0x01, 0xca, 0xff, 0x01,
    0xd2, 0x02, 0x02, 0xcd, 0x89, 0x06, 0xc6, 0x81, 0xfa, 0x0a, 0x02, 0xcd,
    0x89, 0x06, 0xca, 0x13, 0x02, 0xda, 0x13, 0x02, 0xe2, 0x16, 0x02, 0xcd,
    0x89, 0x06, 0xc6, 0xfe, 0xda, 0x1e, 0x02, 0xcd, 0x89, 0x06, 0xca, 0x27,
    0x02, 0xe2, 0x27, 0x02, 0xfa, 0x2a, 0x02, 0xcd, 0x89, 0x06, 0xfe, 0x00,
    0xda, 0x42, 0x02, 0xca, 0x42, 0x02, 0xfe, 0xf5, 0xda, 0x42, 0x02, 0xc2,
    0x42, 0x02, 0xfe, 0xff, 0xca, 0x42, 0x02, 0xda, 0x45, 0x02, 0xcd, 0x89,
    0x06, 0xce, 0x0a, 0xce, 0x0a, 0xfe, 0x0b, 0xca, 0x51, 0x02, 0xcd, 0x89,
    0x06, 0xd6, 0x0c, 0xd6, 0x0f, 0xfe, 0xf0, 0xca, 0x5d, 0x02, 0xcd, 0x89,
    0x06, 0xde, 0xf1, 0xde, 0x0e, 0xfe, 0xf0, 0xca, 0x69, 0x02, 0xcd, 0x89,
    0x06, 0xe6, 0x55, 0xfe, 0x50, 0xca, 0x73, 0x02, 0xcd, 0x89, 0x06, 0xf6,
    0x3a, 0xfe, 0x7a, 0xca, 0x7d, 0x02, 0xcd, 0x89, 0x06, 0xee, 0x0f, 0xfe,
    0x75, 0xca, 0x87, 0x02, 0xcd, 0x89, 0x06, 0xe6, 0x00, 0xdc, 0x89, 0x06,
    0xe4, 0x89, 0x06, 0xfc, 0x89, 0x06, 0xc4, 0x89, 0x06, 0xfe, 0x00, 0xca,
    0x9d, 0x02, 0xcd, 0x89, 0x06, 0xd6, 0x77, 0xd4, 0x89, 0x06, 0xec, 0x89,
    0x06, 0xf4, 0x89, 0x06, 0xcc, 0x89, 0x06, 0xfe, 0x89, 0xca, 0xb3, 0x02,
    0xcd, 0x89, 0x06, 0xe6, 0xff, 0xe4, 0xc0, 0x02, 0xfe, 0xd9, 0xca, 0x1d,
    0x03, 0xcd, 0x89, 0x06, 0xe8, 0xc6, 0x10, 0xec, 0xcc, 0x02, 0xc6, 0x02,
    0xe0, 0xcd, 0x89, 0x06, 0xe0, 0xc6, 0x20, 0xfc, 0xd8, 0x02, 0xc6, 0x04,
    0xe8, 0xcd, 0x89, 0x06, 0xf0, 0xc6, 0x80, 0xf4, 0xe4, 0x02, 0xc6, 0x80,
    0xf8, 0xcd, 0x89, 0x06, 0xf8, 0xc6, 0x40, 0xd4, 0xf0, 0x02, 0xc6, 0x40,
    0xf0, 0xcd, 0x89, 0x06, 0xd8, 0xc6, 0x8f, 0xdc, 0xfc, 0x02, 0xd6, 0x02,
    0xd0, 0xcd, 0x89, 0x06, 0xd0, 0xc6, 0xf7, 0xc4, 0x08, 0x03, 0xc6, 0xfe,
    0xd8, 0xcd, 0x89, 0x06, 0xc8, 0xc6, 0x01, 0xcc, 0x14, 0x03, 0xc6, 0xd0,
    0xc0, 0xcd, 0x89, 0x06, 0xc0, 0xc6, 0x47, 0xfe, 0x47, 0xc8, 0xcd, 0x89,
    0x06, 0x3e, 0x77, 0x3c, 0x47, 0x04, 0x48, 0x0d, 0x51, 0x5a, 0x63, 0x6c,
    0x7d, 0x3d, 0x4f, 0x59, 0x6b, 0x45, 0x50, 0x62, 0x7c, 0x57, 0x14, 0x6a,
    0x4d, 0x0c, 0x61, 0x44, 0x05, 0x58, 0x7b, 0x5f, 0x1c, 0x43, 0x60, 0x24,
    0x4c, 0x69, 0x55, 0x15, 0x7a, 0x67, 0x25, 0x54, 0x42, 0x68, 0x2c, 0x5d,
    0x1d, 0x4b, 0x79, 0x6f, 0x2d, 0x65, 0x5c, 0x53, 0x4a, 0x41, 0x78, 0xfe,
    0x77, 0xc4, 0x89, 0x06, 0xaf, 0x06, 0x01, 0x0e, 0x03, 0x16, 0x07, 0x1e,
    0x0f, 0x26, 0x1f, 0x2e, 0x3f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x87,
    0xfe, 0xf0, 0xc4, 0x89, 0x06, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0xfe,
    0x78, 0xc4, 0x89, 0x06, 0x97, 0xc4, 0x89, 0x06, 0x3e, 0x80, 0x87, 0x06,
    0x01, 0x0e, 0x02, 0x16, 0x03, 0x1e, 0x04, 0x26, 0x05, 0x2e, 0x06, 0x88,
    0x06, 0x80, 0x80, 0x80, 0x89, 0x80, 0x80, 0x8a, 0x80, 0x80, 0x8b, 0x80,
    0x80, 0x8c, 0x80, 0x80, 0x8d, 0x80, 0x80, 0x8f, 0xfe, 0x37, 0xc4, 0x89,
    0x06, 0x3e, 0x80, 0x87, 0x06, 0x01, 0x98, 0x06, 0xff, 0x80, 0x99, 0x80,
    0x9a, 0x80, 0x9b, 0x80, 0x9c, 0x80, 0x9d, 0xfe, 0xe0, 0xc4, 0x89, 0x06,
    0x3e, 0x80, 0x87, 0x9f, 0xfe, 0xff, 0xc4, 0x89, 0x06, 0x3e, 0xff, 0x06,
    0xfe, 0x0e, 0xfc, 0x16, 0xef, 0x1e, 0x7f, 0x26, 0xf4, 0x2e, 0xbf, 0xa7,
    0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa7, 0xfe, 0x24, 0xc4, 0x89, 0x06, 0xaf,
    0x06, 0x01, 0x0e, 0x02, 0x16, 0x04, 0x1e, 0x08, 0x26, 0x10, 0x2e, 0x20,
    0xb0, 0xb1, 0xb2, 0xb3, 0xb4, 0xb5, 0xb7, 0xfe, 0x3f, 0xc4, 0x89, 0x06,
    0x3e, 0x00, 0x26, 0x8f, 0x2e, 0x4f, 0xa8, 0xa9, 0xaa, 0xab, 0xac, 0xad,
    0xfe, 0xcf, 0xc4, 0x89, 0x06, 0xaf, 0xc4, 0x89, 0x06, 0x06, 0x44, 0x0e,
    0x45, 0x16, 0x46, 0x1e, 0x47, 0x26, 0x06, 0x2e, 0xa6, 0x70, 0x06, 0x00,
    0x46, 0x3e, 0x44, 0xb8, 0xc4, 0x89, 0x06, 0x72, 0x16, 0x00, 0x56, 0x3e,
    0x46, 0xba, 0xc4, 0x89, 0x06, 0x73, 0x1e, 0x00, 0x5e, 0x3e, 0x47, 0xbb,
    0xc4, 0x89, 0x06, 0x74, 0x26, 0x06, 0x2e, 0xa6, 0x66, 0x3e, 0x06, 0xbc,
    0xc4, 0x89, 0x06, 0x75, 0x26, 0x06, 0x2e, 0xa6, 0x6e, 0x3e, 0xa6, 0xbd,
    0xc4, 0x89, 0x06, 0x26, 0x06, 0x2e, 0xa6, 0x3e, 0x32, 0x77, 0xbe, 0xc4,
    0x89, 0x06, 0x86, 0xfe, 0x64, 0xc4, 0x89, 0x06, 0xaf, 0x7e, 0xfe, 0x32,
    0xc4, 0x89, 0x06, 0x26, 0x06, 0x2e, 0xa6, 0x7e, 0x96, 0xc4, 0x89, 0x06,
    0x3e, 0x80, 0x87, 0x8e, 0xfe, 0x33, 0xc4, 0x89, 0x06, 0x3e, 0x80, 0x87,
    0x9e, 0xfe, 0xcd, 0xc4, 0x89, 0x06, 0xa6, 0xc4, 0x89, 0x06, 0x3e, 0x25,
    0xb6, 0xfe, 0x37, 0xc4, 0x89, 0x06, 0xae, 0xfe, 0x05, 0xc4, 0x89, 0x06,
    0x36, 0x55, 0x34, 0x35, 0x86, 0xfe, 0x5a, 0xc4, 0x89, 0x06, 0x01, 0xff,
    0x12, 0x11, 0xff, 0x12, 0x21, 0xff, 0x12, 0x03, 0x13, 0x23, 0x3e, 0x13,
    0xb8, 0xc4, 0x89, 0x06, 0xba, 0xc4, 0x89, 0x06, 0xbc, 0xc4, 0x89, 0x06,
    0x3e, 0x00, 0xb9, 0xc4, 0x89, 0x06, 0xbb, 0xc4, 0x89, 0x06, 0xbd, 0xc4,
    0x89, 0x06, 0x0b, 0x1b, 0x2b, 0x3e, 0x12, 0xb8, 0xc4, 0x89, 0x06, 0xba,
    0xc4, 0x89, 0x06, 0xbc, 0xc4, 0x89, 0x06, 0x3e, 0xff, 0xb9, 0xc4, 0x89,
    0x06, 0xbb, 0xc4, 0x89, 0x06, 0xbd, 0xc4, 0x89, 0x06, 0x32, 0xa6, 0x06,
    0xaf, 0x3a, 0xa6, 0x06, 0xfe, 0xff, 0xc4, 0x89, 0x06, 0x2a, 0xa4, 0x06,
    0x22, 0xa6, 0x06, 0x3a, 0xa4, 0x06, 0x47, 0x3a, 0xa6, 0x06, 0xb8, 0xc4,
    0x89, 0x06, 0x3a, 0xa5, 0x06, 0x47, 0x3a, 0xa7, 0x06, 0xb8, 0xc4, 0x89,
    0x06, 0x3e, 0xaa, 0x32, 0xa6, 0x06, 0x44, 0x4d, 0xaf, 0x0a, 0xfe, 0xaa,
    0xc4, 0x89, 0x06, 0x3c, 0x02, 0x3a, 0xa6, 0x06, 0xfe, 0xab, 0xc4, 0x89,
    0x06, 0x3e, 0x77, 0x32, 0xa6, 0x06, 0x2a, 0xa4, 0x06, 0x11, 0x00, 0x00,
    0xeb, 0xaf, 0x1a, 0xfe, 0x77, 0xc4, 0x89, 0x06, 0xaf, 0x84, 0x85, 0xc4,
    0x89, 0x06, 0x3e, 0xcc, 0x12, 0x3a, 0xa6, 0x06, 0xfe, 0xcc, 0x12, 0x3a,
    0xa6, 0x06, 0xfe, 0xcc, 0xc4, 0x89, 0x06, 0x21, 0x77, 0x77, 0x29, 0x3e,
    0xee, 0xbc, 0xc4, 0x89, 0x06, 0xbd, 0xc4, 0x89, 0x06, 0x21, 0x55, 0x55,
    0x01, 0xff, 0xff, 0x09, 0x3e, 0x55, 0xd4, 0x89, 0x06, 0xbc, 0xc4, 0x89,
    0x06, 0x3e, 0x54, 0xbd, 0xc4, 0x89, 0x06, 0x21, 0xaa, 0xaa, 0x11, 0x33,
    0x33, 0x19, 0x3e, 0xdd, 0xbc, 0xc4, 0x89, 0x06, 0xbd, 0xc4, 0x89, 0x06,
    0x37, 0xd4, 0x89, 0x06, 0x3f, 0xdc, 0x89, 0x06, 0x3e, 0xaa, 0x2f, 0xfe,
    0x55, 0xc4, 0x89, 0x06, 0xb7, 0x27, 0xfe, 0x55, 0xc4, 0x89, 0x06, 0x3e,
    0x88, 0x87, 0x27, 0xfe, 0x76, 0xc4, 0x89, 0x06, 0xaf, 0x3e, 0xaa, 0x27,
    0xd4, 0x89, 0x06, 0xfe, 0x10, 0xc4, 0x89, 0x06, 0xaf, 0x3e, 0x9a, 0x27,
    0xd4, 0x89, 0x06, 0xc4, 0x89, 0x06, 0x37, 0x3e, 0x42, 0x07, 0xdc, 0x89,
    0x06, 0x07, 0xd4, 0x89, 0x06, 0xfe, 0x09, 0xc4, 0x89, 0x06, 0x0f, 0xd4,
    0x89, 0x06, 0x0f, 0xfe, 0x42, 0xc4, 0x89, 0x06, 0x17, 0x17, 0xd4, 0x89,
    0x06, 0xfe, 0x08, 0xc4, 0x89, 0x06, 0x1f, 0x1f, 0xdc, 0x89, 0x06, 0xfe,
    0x02, 0xc4, 0x89, 0x06, 0x01, 0x34, 0x12, 0x11, 0xaa, 0xaa, 0x21, 0x55,
    0x55, 0xaf, 0xc5, 0xd5, 0xe5, 0xf5, 0x01, 0x00, 0x00, 0x11, 0x00, 0x00,
    0x21, 0x00, 0x00, 0x3e, 0xc0, 0xc6, 0xf0, 0xf1, 0xe1, 0xd1, 0xc1, 0xdc,
    0x89, 0x06, 0xc4, 0x89, 0x06, 0xe4, 0x89, 0x06, 0xfc, 0x89, 0x06, 0x3e,
    0x12, 0xb8, 0xc4, 0x89, 0x06, 0x3e, 0x34, 0xb9, 0xc4, 0x89, 0x06, 0x3e,
    0xaa, 0xba, 0xc4, 0x89, 0x06, 0xbb, 0xc4, 0x89, 0x06, 0x3e, 0x55, 0xbc,
    0xc4, 0x89, 0x06, 0xbd, 0xc4, 0x89, 0x06, 0x21, 0x00, 0x00, 0x39, 0x22,
    0xab, 0x06, 0x31, 0xaa, 0x06, 0x3b, 0x3b, 0x33, 0x3b, 0x3e, 0x55, 0x32,
    0xa8, 0x06, 0x2f, 0x32, 0xa9, 0x06, 0xc1, 0xb8, 0xc4, 0x89, 0x06, 0x2f,
    0xb9, 0xc4, 0x89, 0x06, 0x21, 0xaa, 0x06, 0xf9, 0x21, 0x33, 0x77, 0x3b,
    0x3b, 0xe3, 0x3a, 0xa9, 0x06, 0xfe, 0x77, 0xc4, 0x89, 0x06, 0x3a, 0xa8,
    0x06, 0xfe, 0x33, 0xc4, 0x89, 0x06, 0x3e, 0x55, 0xbd, 0xc4, 0x89, 0x06,
    0x2f, 0xbc, 0xc4, 0x89, 0x06, 0x2a, 0xab, 0x06, 0xf9, 0x21, 0x9b, 0x06,
    0xe9, 0x21, 0x8b, 0x01, 0xcd, 0x45, 0x01, 0xe3, 0x7c, 0xcd, 0x54, 0x01,
    0x7d, 0xcd, 0x54, 0x01, 0xc3, 0x00, 0x00, 0x21, 0x74, 0x01, 0xcd, 0x45,
    0x01, 0xc3, 0x00, 0x00, 0xa6, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00
];
const instructionTable = ["NOP", "LXI", "STAX", "INX", "INR", "DCR", "MVI", "RLC", "NOP", "DAD", "LDAX", "DCX", "INR", "DCR", "MVI", "RRC",
    "NOP", "LXI", "STAX", "INX", "INR", "DCR", "MVI", "RAL", "NOP", "DAD", "LDAX", "DCX", "INR", "DCR", "MVI", "RAR",
    "NOP", "LXI", "SHLD", "INX", "INR", "DCR", "MVI", "DAA", "NOP", "DAD", "LHLD", "DCX", "INR", "DCR", "MVI", "CMA",
    "NOP", "LXI", "STA", "INX", "INR", "DCR", "MVI", "STC", "NOP", "DAD", "LDA", "DCX", "INR", "DCR", "MVI", "CMC",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "HLT", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV", "MOV",
    "ADD", "ADD", "ADD", "ADD", "ADD", "ADD", "ADD", "ADD", "ADC", "ADC", "ADC", "ADC", "ADC", "ADC", "ADC", "ADC",
    "SUB", "SUB", "SUB", "SUB", "SUB", "SUB", "SUB", "SUB", "SBB", "SBB", "SBB", "SBB", "SBB", "SBB", "SBB", "SBB",
    "ANA", "ANA", "ANA", "ANA", "ANA", "ANA", "ANA", "ANA", "XRA", "XRA", "XRA", "XRA", "XRA", "XRA", "XRA", "XRA",
    "ORA", "ORA", "ORA", "ORA", "ORA", "ORA", "ORA", "ORA", "CMP", "CMP", "CMP", "CMP", "CMP", "CMP", "CMP", "CMP",
    "RNZ", "POP", "JNZ", "JMP", "CNZ", "PUSH", "ADI", "RST", "RZ", "RET", "JZ", "JMP", "CZ", "CALL", "ACI", "RST",
    "RNC", "POP", "JNC", "OUT", "CNC", "PUSH", "SUI", "RST", "RC", "RET", "JC", "IN", "CC", "CALL", "SBI", "RST",
    "RPO", "POP", "JPO", "XTHL", "CPO", "PUSH", "ANI", "RST", "RPE", "PCHL", "JPE", "XCHG", "CPE", "CALL", "XRI", "RST",
    "RP", "POP", "JP", "DI", "CP", "PUSH", "ORI", "RST", "RM", "SPHL", "JM", "EI", "CM", "CALL", "CPI", "RST"];
const instructionSize = [1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    1, 3, 3, 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1,
    1, 3, 3, 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 3, 3, 3, 1, 2, 1, 1, 1, 3, 3, 3, 3, 2, 1,
    1, 1, 3, 2, 3, 1, 2, 1, 1, 1, 3, 2, 3, 3, 2, 1,
    1, 1, 3, 1, 3, 1, 2, 1, 1, 1, 3, 1, 3, 3, 2, 1,
    1, 1, 3, 1, 3, 1, 2, 1, 1, 1, 3, 1, 3, 3, 2, 1];
const instructionsDisasm = ["NOP", "LXI B", "STAX B", "INX B", "INR B", "DCR B", "MVI B", "RLC", "NOP", "DAD B", "LDAX B", "DCX B", "INR C", "DCR C", "MVI C", "RRC",
    "NOP", "LXI D", "STAX D", "INX D", "INR D", "DCR D", "MVI D", "RAL", "NOP", "DAD D", "LDAX D", "DCX D", "INR E", "DCR E", "MVI E", "RAR",
    "NOP", "LXI H", "SHLD", "INX H", "INR H", "DCR H", "MVI H", "DAA", "NOP", "DAD H", "LHLD", "DCX H", "INR L", "DCR L", "MVI L", "CMA",
    "NOP", "LXI SP", "STA", "INX SP", "INR M", "DCR M", "MVI M", "STC", "NOP", "DAD SP", "LDA", "DCX SP", "INR A", "DCR A", "MVI A", "CMC",
    "MOV B, B", "MOV B, C", "MOV B, D", "MOV B, E", "MOV B, H", "MOV B, L", "MOV B, M", "MOV B, A", "MOV C, B", "MOV C, C", "MOV C, D", "MOV C, E", "MOV C, H", "MOV C, L", "MOV C, M", "MOV C, A",
    "MOV D, B", "MOV D, C", "MOV D, D", "MOV D, E", "MOV D, H", "MOV D, L", "MOV D, M", "MOV D, A", "MOV E, B", "MOV E, C", "MOV E, D", "MOV E, E", "MOV E, H", "MOV E, L", "MOV E, M", "MOV E, A",
    "MOV H, B", "MOV H, C", "MOV H, D", "MOV H, E", "MOV H, H", "MOV H, L", "MOV H, M", "MOV H, A", "MOV L, B", "MOV L, C", "MOV L, D", "MOV L, E", "MOV L, H", "MOV L, L", "MOV L, M", "MOV L, A",
    "MOV M, B", "MOV M, C", "MOV M, D", "MOV M, E", "MOV M, H", "MOV M, L", "HLT", "MOV M, A", "MOV A, B", "MOV A, C", "MOV A, D", "MOV A, E", "MOV A, H", "MOV A, L", "MOV A, M", "MOV A, A",
    "ADD B", "ADD C", "ADD D", "ADD E", "ADD H", "ADD L", "ADD M", "ADD A", "ADC B", "ADC C", "ADC D", "ADC E", "ADC H", "ADC L", "ADC M", "ADC A",
    "SUB B", "SUB C", "SUB D", "SUB E", "SUB H", "SUB L", "SUB M", "SUB A", "SBB B", "SBB C", "SBB D", "SBB E", "SBB H", "SBB L", "SBB M", "SBB A",
    "ANA B", "ANA C", "ANA D", "ANA E", "ANA H", "ANA L", "ANA M", "ANA A", "XRA B", "XRA C", "XRA D", "XRA E", "XRA H", "XRA L", "XRA M", "XRA A",
    "ORA B", "ORA C", "ORA D", "ORA E", "ORA H", "ORA L", "ORA M", "ORA A", "CMP B", "CMP C", "CMP D", "CMP E", "CMP H", "CMP L", "CMP M", "CMP A",
    "RNZ", "POP B", "JNZ", "JMP", "CNZ", "PUSH B", "ADI", "RST 0", "RZ", "RET", "JZ", "JMP", "CZ", "CALL", "ACI", "RST 1",
    "RNC", "POP D", "JNC", "OUT", "CNC", "PUSH D", "SUI", "RST 2", "RC", "RET", "JC", "IN", "CC", "CALL", "SBI", "RST 3",
    "RPO", "POP H", "JPO", "XTHL", "CPO", "PUSH H", "ANI", "RST 4", "RPE", "PCHL", "JPE", "XCHG", "CPE", "CALL", "XRI", "RST 5",
    "RP", "POP PSW", "JP", "DI", "CP", "PUSH PSW", "ORI", "RST 6", "RM", "SPHL", "JM", "EI", "CM", "CALL", "CPI", "RST 7"];
//import { instructionTable, instructionSize } from './instructions';
const regA = 7;
class Flags {
}
const B = 0, C = 1, D = 2, E = 3, H = 4, L = 5, M = 6, A = 7, F = 8;
function WORD(hi, lo) {
    return (hi << 8) + lo;
}
function LO(n) {
    return n & 0xff;
}
function HI(n) {
    return n >> 8;
}
function SRC(opcode) {
    return opcode & 0b111;
}
function DST(opcode) {
    return (opcode >> 3) & 0b111;
}
class e8080 {
    constructor() {
        this.instructionHandlers = {
            "ACI": (op, d8) => {
                const a = this.getReg(A);
                const b = d8;
                const c = this.status.C ? 1 : 0;
                const result = a + b + c;
                this.setReg(A, result);
                this.setFlags(result);
                this.setCarry(result);
                this.status.A = ((a & 0x0f) + (b & 0x0f) + 1 > 0x0f);
            },
            "ADC": op => {
                const a = this.getReg(A);
                const b = this.getReg(SRC(op));
                const c = this.status.C ? 1 : 0;
                const result = a + b + c;
                this.setReg(A, result);
                this.setFlags(result);
                this.setCarry(result);
                this.status.A = ((a & 0x0f) + (b & 0x0f) + 1 > 0x0f);
            },
            "ADD": op => {
                const a = this.getReg(A);
                const b = this.getReg(SRC(op));
                const result = a + b;
                this.setReg(A, result);
                this.setFlags(result);
                this.setCarry(result);
                this.setAC(a, b);
            },
            "ADI": (op, d8) => {
                const a = this.getReg(A);
                const b = d8;
                const result = a + b;
                this.setReg(A, result);
                this.setFlags(result);
                this.setCarry(result);
                this.setAC(a, b);
            },
            "ANA": op => {
                const result = this.getReg(regA) & this.getReg(SRC(op));
                this.setReg(regA, result);
                this.setFlags(result);
                this.status.C = false;
                this.status.A = false; // undocumented
            },
            "ANI": (op, d8) => {
                const result = this.getReg(regA) & d8;
                this.setReg(regA, result);
                this.setFlags(result);
                this.status.C = false;
                this.status.A = false; // undocumented
            },
            "CALL": (opcode, lo, hi) => { this.call(hi, lo); },
            "CC": (opcode, lo, hi) => { if (this.status.C)
                this.call(hi, lo); },
            "CM": (opcode, lo, hi) => { if (this.status.S)
                this.call(hi, lo); },
            "CMA": op => {
                this.setReg(A, this.getReg(A) ^ 0xff);
            },
            "CMC": op => { this.status.C = !this.status.C; },
            "CMP": op => {
                this.sub(this.getReg(A), this.getReg(SRC(op)));
            },
            "CNC": (opcode, lo, hi) => { if (!this.status.C)
                this.call(hi, lo); },
            "CNZ": (opcode, lo, hi) => { if (!this.status.Z)
                this.call(hi, lo); },
            "CP": (opcode, lo, hi) => { if (!this.status.S)
                this.call(hi, lo); },
            "CPE": (opcode, lo, hi) => { if (this.status.P)
                this.call(hi, lo); },
            "CPI": (op, d8) => {
                this.sub(this.getReg(A), d8);
            },
            "CPO": (opcode, lo, hi) => { if (!this.status.P)
                this.call(hi, lo); },
            "CZ": (opcode, lo, hi) => { if (this.status.Z)
                this.call(hi, lo); },
            "DAA": op => {
                let a = this.getReg(A);
                if ((a & 0x0f) > 9 || this.status.A) {
                    a = a + 6;
                    this.setReg(A, a);
                    this.status.A = true;
                }
                if ((a >> 4) > 9 || this.status.C) {
                    a = a + (6 << 4);
                    this.setReg(A, a);
                    this.status.C = true;
                }
            },
            "DAD": op => {
                let value;
                if (op === 0x39) {
                    value = this.sp[0];
                }
                else {
                    const lo = DST(op);
                    const hi = lo - 1;
                    value = WORD(this.getReg(hi), this.getReg(lo));
                }
                const result = value + WORD(this.getReg(H), this.getReg(L));
                this.setReg(H, HI(result));
                this.setReg(L, LO(result));
                this.status.C = result > 0xffff;
            },
            "DCR": op => {
                const result = this.getReg(DST(op)) - 1;
                this.setReg(DST(op), result);
                this.setFlags(result);
                this.setAC(this.getReg(DST(op)), 0xff);
            },
            "DCX": op => {
                if (op === 0x3B) {
                    this.sp[0]--;
                }
                else {
                    const lo = DST(op);
                    const hi = lo - 1;
                    const result = WORD(this.getReg(hi), this.getReg(lo)) - 1;
                    this.setReg(hi, HI(result));
                    this.setReg(lo, LO(result));
                }
            },
            "DI": null,
            "EI": null,
            "HLT": op => {
                this.running = false;
                this.pc[0]--;
            },
            "IN": null,
            "INR": op => {
                const result = this.getReg(DST(op)) + 1;
                this.setReg(DST(op), result);
                this.setFlags(result);
                this.setAC(this.getReg(DST(op)), 1);
            },
            "INX": op => {
                if (op === 0x33) {
                    this.sp[0]++;
                }
                else {
                    const hi = DST(op);
                    const lo = hi + 1;
                    const result = WORD(this.getReg(hi), this.getReg(lo)) + 1;
                    this.setReg(hi, HI(result));
                    this.setReg(lo, LO(result));
                }
            },
            "JC": (op, lo, hi) => { if (this.status.C)
                this.pc[0] = WORD(hi, lo); },
            "JM": (op, lo, hi) => { if (this.status.S)
                this.pc[0] = WORD(hi, lo); },
            "JMP": (op, lo, hi) => { this.pc[0] = WORD(hi, lo); },
            "JNC": (op, lo, hi) => { if (!this.status.C)
                this.pc[0] = WORD(hi, lo); },
            "JNZ": (op, lo, hi) => { if (!this.status.Z)
                this.pc[0] = WORD(hi, lo); },
            "JP": (op, lo, hi) => { if (!this.status.S)
                this.pc[0] = WORD(hi, lo); },
            "JPE": (op, lo, hi) => { if (this.status.P)
                this.pc[0] = WORD(hi, lo); },
            "JPO": (op, lo, hi) => { if (!this.status.P)
                this.pc[0] = WORD(hi, lo); },
            "JZ": (op, lo, hi) => { if (this.status.Z)
                this.pc[0] = WORD(hi, lo); },
            "LDA": (op, lo, hi) => {
                this.setReg(A, this.memory[WORD(hi, lo)]);
            },
            "LDAX": op => {
                let addr;
                // LDAX B
                if (op === 0x0A) {
                    addr = WORD(this.registers[B], this.registers[C]);
                }
                // LDAX D
                else {
                    addr = WORD(this.registers[D], this.registers[E]);
                }
                this.setReg(A, this.memory[addr]);
            },
            "LHLD": (op, lo, hi) => {
                this.setReg(L, this.memory[WORD(hi, lo)]);
                this.setReg(H, this.memory[(WORD(hi, lo) + 1) & 0xffff]);
            },
            "LXI": (op, lo, hi) => {
                if (op === 0x31) {
                    this.sp[0] = WORD(hi, lo);
                }
                else {
                    const reghi = DST(op);
                    const reglo = reghi + 1;
                    this.setReg(reghi, hi);
                    this.setReg(reglo, lo);
                }
            },
            "MOV": op => {
                const result = this.getReg(SRC(op));
                this.setReg(DST(op), result);
                this.setFlags(result);
            },
            "MVI": (op, d8) => {
                this.setReg(DST(op), d8);
            },
            "NOP": op => { },
            "ORA": op => {
                const result = this.getReg(regA) | this.getReg(SRC(op));
                this.setReg(regA, result);
                this.setFlags(result);
                this.status.C = false;
                this.status.A = false; // undocumented
            },
            "ORI": (op, d8) => {
                const result = this.getReg(regA) | d8;
                this.setReg(regA, result);
                this.setFlags(result);
                this.status.C = false;
                this.status.A = false; // undocumented
            },
            "OUT": (op, d8) => {
                // TODO: rxjs
                document.getElementById('output').innerHTML += String.fromCharCode(this.registers[A]);
            },
            "PCHL": op => {
                this.pc[0] = WORD(this.getReg(H), this.getReg(L));
            },
            "POP": op => {
                const value = WORD(this.memory[this.sp[0] + 1], this.memory[this.sp[0]]);
                this.sp[0] += 2;
                // POP PSW
                if (op === 0xf1) {
                    this.setReg(A, HI(value));
                    this.setReg(F, LO(value));
                }
                else {
                    this.setReg(DST(op), HI(value));
                    this.setReg(DST(op) + 1, LO(value));
                }
            },
            "PUSH": op => {
                let value;
                // PUSH PSW
                if (op === 0xf5) {
                    value = WORD(this.getReg(A), this.getReg(F));
                }
                else {
                    value = WORD(this.getReg(DST(op)), this.getReg(DST(op) + 1));
                }
                this.sp[0] -= 2;
                this.memory[this.sp[0]] = LO(value);
                this.memory[this.sp[0] + 1] = HI(value);
            },
            "RAL": op => {
                const a = this.getReg(A);
                const c = +this.status.C;
                this.status.C = (a & 0b10000000) !== 0;
                this.setReg(A, (a << 1) + c);
            },
            "RAR": op => {
                const a = this.getReg(A);
                const c = +this.status.C;
                this.status.C = (a & 0b1) !== 0;
                this.setReg(A, (a >> 1) + (c << 7));
            },
            "RC": op => { if (this.status.C)
                this.ret(); },
            "RET": op => { this.ret(); },
            "RLC": op => {
                const a = this.getReg(A);
                this.status.C = (a & 0b10000000) !== 0;
                this.setReg(A, (a << 1) + (+this.status.C));
            },
            "RM": op => { if (this.status.S)
                this.ret(); },
            "RNC": op => { if (!this.status.C)
                this.ret(); },
            "RNZ": op => { if (!this.status.Z)
                this.ret(); },
            "RP": op => { if (!this.status.S)
                this.ret(); },
            "RPE": op => { if (this.status.P)
                this.ret(); },
            "RPO": op => { if (!this.status.P)
                this.ret(); },
            "RRC": op => {
                const a = this.getReg(A);
                this.status.C = (a & 0b1) !== 0;
                this.setReg(A, (a >> 1) + ((+this.status.C) << 7));
            },
            "RST": null,
            "RZ": op => { if (this.status.Z)
                this.ret(); },
            "SBB": op => {
                this.setReg(A, this.sub(this.getReg(A), this.getReg(SRC(op)) + (+this.status.C)));
            },
            "SBI": (op, d8) => {
                this.setReg(A, this.sub(this.getReg(A), d8 + (+this.status.C)));
            },
            "SHLD": (op, lo, hi) => {
                this.memory[WORD(hi, lo)] = this.getReg(L);
                this.memory[(WORD(hi, lo) + 1) & 0xffff] = this.getReg(H);
            },
            "SPHL": op => {
                this.sp[0] = WORD(this.getReg(H), this.getReg(L));
            },
            "STA": (op, lo, hi) => {
                this.memory[WORD(hi, lo)] = this.getReg(A);
            },
            "STAX": op => {
                let addr;
                // STAX B
                if (op === 0x02) {
                    addr = WORD(this.registers[B], this.registers[C]);
                }
                // STAX D
                else {
                    addr = WORD(this.registers[D], this.registers[E]);
                }
                this.memory[addr] = this.getReg(A);
            },
            "STC": op => {
                this.status.C = true;
            },
            "SUB": op => {
                this.setReg(A, this.sub(this.getReg(A), this.getReg(SRC(op))));
            },
            "SUI": (op, d8) => {
                this.setReg(A, this.sub(this.getReg(A), d8));
            },
            "XCHG": op => {
                const d = this.getReg(D);
                const e = this.getReg(E);
                this.setReg(D, this.getReg(H));
                this.setReg(E, this.getReg(L));
                this.setReg(H, d);
                this.setReg(L, e);
            },
            "XRA": op => {
                const result = this.getReg(regA) ^ this.getReg(SRC(op));
                this.setReg(regA, result);
                this.setFlags(result);
                this.status.C = false;
                this.status.A = false; // undocumented
            },
            "XRI": (op, d8) => {
                const result = this.getReg(regA) ^ d8;
                this.setReg(regA, result);
                this.setFlags(result);
                this.status.C = false;
                this.status.A = false; // undocumented
            },
            "XTHL": op => {
                const l = this.getReg(L);
                const h = this.getReg(H);
                this.setReg(L, this.memory[this.sp[0]]);
                this.setReg(H, this.memory[this.sp[0] + 1]);
                this.memory[this.sp[0]] = l;
                this.memory[this.sp[0] + 1] = h;
            }
        };
        this.status = new Flags();
        this.memory = new Uint8Array(0x10000);
        this.registers = new Uint8Array(8);
        this.sp = new Uint16Array(1);
        this.pc = new Uint16Array(1);
        this.reset();
    }
    ret() {
        this.pc[0] = WORD(this.memory[this.sp[0] + 1], this.memory[this.sp[0]]);
        this.sp[0] += 2;
    }
    sub(a, b) {
        const b_ = b ^ 0xff;
        const result = a + b_ + 1;
        this.setFlags(result);
        this.setCarry(result);
        this.status.C = !this.status.C;
        this.status.A = ((a & 0x0f) + (b_ & 0x0f) + 1 > 0x0f);
        return result;
    }
    call(hi, lo) {
        const addr = WORD(hi, lo);
        this.sp[0] -= 2;
        this.memory[this.sp[0]] = LO(this.pc[0]);
        this.memory[this.sp[0] + 1] = HI(this.pc[0]);
        this.pc[0] = addr;
    }
    setAC(a, b) {
        if ((a & 0x0f) + (b & 0x0f) > 0x0f) {
            this.status.A = true;
        }
        else {
            this.status.A = false;
        }
    }
    setCarry(result) {
        this.status.C = (result & 0b100000000) !== 0;
    }
    setFlags(result) {
        this.status.S = (result & 0b10000000) !== 0;
        this.status.Z = (result & 0xff) === 0;
        let parity = 1;
        for (let i = 0; i < 8; i++) {
            if ((result & (1 << i)) !== 0) {
                parity++;
            }
        }
        this.status.P = (parity & 1) === 1;
        // this.status.C = result & 0b100000000;
    }
    getBit(n, bit) {
        return (n & (1 << bit)) === 0 ? 0 : 1;
    }
    getReg(reg) {
        if (reg === F) {
            //S Z 0 A 0 P 1 C
            const flags = +this.status.C + (1 << 1) + (+this.status.P << 2) + (0 << 3) + (+this.status.A << 4) + (0 << 5) + (+this.status.Z << 6) + (+this.status.S << 7);
            return flags;
        }
        else if (reg === M) {
            return this.memory[(this.registers[H] << 8) + this.registers[L]];
        }
        else {
            return this.registers[reg];
        }
    }
    setReg(reg, value) {
        if (reg === F) {
            //S Z 0 A 0 P 1 C
            this.status.C = (value & 1) !== 0;
            this.status.P = (value & (1 << 2)) !== 0;
            this.status.A = (value & (1 << 4)) !== 0;
            this.status.Z = (value & (1 << 6)) !== 0;
            this.status.S = (value & (1 << 7)) !== 0;
        }
        else if (reg === M) {
            this.memory[(this.registers[H] << 8) + this.registers[L]] = value;
        }
        else {
            this.registers[reg] = value;
        }
    }
    addr() {
        return this.memory[this.pc[0] + 1] + (this.memory[this.pc[0] + 2] << 8);
    }
    reset() {
        this.registers.fill(0);
        this.memory.fill(0);
        this.sp[0] = 0xf000;
        this.pc[0] = 0;
        this.status.S = this.status.Z = this.status.A = this.status.P = this.status.C = false;
        this.running = true;
    }
    step() {
        if (!this.running) {
            return;
        }
        const opcode = this.memory[this.pc[0]];
        const instr = instructionTable[opcode];
        const len = instructionSize[opcode];
        const args = this.memory.slice(this.pc[0] + 1, this.pc[0] + len);
        this.pc[0] += len;
        if (this.instructionHandlers[instr]) {
            this.instructionHandlers[instr](opcode, ...args);
        }
        else {
            console.log("ERROR: " + instr);
        }
    }
    disasm(addr, num) {
        const opcode = this.memory[addr];
        let instr = instructionsDisasm[opcode];
        const len = instructionSize[opcode];
        if (num > 0) {
            return ['<li ' + (addr === this.pc[0] ? 'class="current"' : '') + '><span><span class="address">' + ('0000' + addr.toString(16)).slice(-4) + ':</span> ' + this.disasm(addr) + '</span></li>', ...this.disasm(addr + len, num - 1)];
        }
        if (num === 0)
            return [];
        if (len === 1) {
            return instr;
        }
        if (instr.includes(' ')) {
            instr = instr + ',';
        }
        if (len == 2) {
            return instr + ' ' + this.memory[addr + 1].toString(16);
        }
        else {
            return instr + ' ' + (this.memory[addr + 1] + (this.memory[addr + 2] << 8)).toString(16);
        }
    }
    showFlags() {
        console.log("S:" + this.status.S + " Z:" + this.status.Z + " A:" + this.status.A + " P:" + this.status.P + " C:" + this.status.C);
    }
}
let emulator = new e8080();
function cpudiag() {
    emulator.reset();
    emulator.memory.set([0x76], 0);
    emulator.memory.set([0xc3, 0x06, 0xec], 0x05);
    emulator.memory.set(cpm, 0xec06);
    emulator.memory.set(cpu_diag, 0x100);
    emulator.pc[0] = 0x100;
    refreshui();
}
const programs = [
    [0x21, 0x10, 0x00, 0x7E, 0xB7, 0xCA, 0x0E, 0x00, 0xD3, 0x01, 0x23, 0xC3, 0x03, 0x00, 0x76, 0x00, 0x48, 0x65, 0x6C, 0x6C, 0x6F, 0x20, 0x57, 0x6F, 0x72, 0x6C, 0x64, 0x21, 0x00, 0x35],
    [
        0x06, 0x00,
        0x0E, 0x06,
        0x16, 0x00,
        0x1E, 0x20,
        0x26, 0x00,
        0x2E, 0x30,
        0xCD, 0x10, 0x00,
        0x76,
        0x78,
        0xB1,
        0xC8,
        0x1A,
        0x77,
        0x13,
        0x23,
        0x0B,
        0x78,
        0xB1,
        0xC2, 0x13, 0x00,
        0xC9,
        0x00, 0x00,
        0x6d, 0x65, 0x6d, 0x63, 0x70, 0x79 /* "memcpy" */
    ]
];
//const data = [..."memcpy"].map(s => s.charCodeAt(0));
emulator.memory.set(programs[0], 0);
//emulator.memory.set(data, 0x100);
function selectProgram() {
    emulator.reset();
    emulator.memory.set(programs[Number(document.getElementById('program').value)], 0);
    document.getElementById('output').innerHTML = '';
    refreshui();
}
function step() {
    emulator.step();
    refreshui();
}
function run() {
    function fn() {
        step();
        if (emulator.running) {
            setTimeout(fn, 0);
        }
    }
    setTimeout(fn, 0);
}
function reset() {
    emulator.reset();
    refreshui();
}
function refreshui() {
    document.getElementById('code').innerHTML = emulator.disasm(emulator.pc[0], 20).map(instr => '' + instr + '').join('');
    document.getElementById('register-values').innerHTML = [0, 1, 2, 3, 4, 5, 6, 7].map(r => '<td>' + ('00' + emulator.getReg(r).toString(16)).slice(-2) + '</td>').join('');
    const stack = Array.from(emulator.memory.slice(emulator.sp[0], Math.min(emulator.sp[0] + 40, 0xf000)));
    const stackwords = [];
    let addr = emulator.sp[0];
    while (stack.length > 1) {
        const lo = stack.shift();
        const hi = stack.shift();
        const val = lo + (hi << 8);
        stackwords.push('<li>' + ('0000' + addr.toString(16)).slice(-4) + ': ' + ('0000' + val.toString(16)).slice(-4) + '</li>');
        addr += 2;
    }
    document.getElementById('stack').innerHTML = stackwords.join('');
    const page = Number(document.getElementById('page').value);
    document.getElementById('memory').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp; 0123456789ABCDEF<br>' +
        Array.from(Array(16).keys()).map(i => ('0000' + (page * 0x100 + i * 16).toString(16).toUpperCase()).slice(-4) + ' ' + Array.from(Array(16).keys()).map(j => displayChar(emulator.memory[page * 0x100 + i * 16 + j])).join('')).join('<br>');
    document.getElementById('flags').innerHTML = "S:" + (+emulator.status.S) + " Z:" + (+emulator.status.Z) + " A:" + (+emulator.status.A) + " P:" + (+emulator.status.P) + " C:" + (+emulator.status.C);
    //JSON.stringify(emulator.status).replace(/["{}]/g,'').replace(/,/g,' ');
}
function displayChar(ch) {
    const str = String.fromCharCode(ch);
    if (str.match(/[A-Za-z0-9]/)) {
        return str;
    }
    else {
        return '.';
    }
}
window.onload = function (ev) {
    cpudiag();
    refreshui();
};
//# sourceMappingURL=main.js.map