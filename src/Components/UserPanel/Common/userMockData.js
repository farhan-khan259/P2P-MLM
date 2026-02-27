export const profileData = {
  memberId: 'IHH192108',
  memberName: 'ANAMIKA SAXENA',
  sponsorId: 'IHH192108',
  sponsorName: 'ANAMIKA SAXENA',
  address: 'hh',
  state: 'Zufar',
  city: 'uu',
  pincode: '6767',
  mobile: '',
  email: '',
  aadharNo: '0',
  panNo: '',
  bankName: 'SBI',
  accountHolder: '',
  accountNo: '20252514974',
  ifsc: 'SBIN0011405',
  bankBranch: 'AMBAMATA UDAIPUR',
  googlePay: '',
  paytm: '',
  phonePay: '',
  upi: ''
};

export const directList = [
  { memberId: 'IHH5977055', memberName: 'sukhdev rawat', joiningDate: '23-06-2021', status: 'ACTIVE' },
  { memberId: 'IHH1676126', memberName: 'BHUWIN SINGH', joiningDate: '27-07-2021', status: 'INACTIVE' }
];

export const teamList = [
  { memberId: 'IHH5977055', name: 'sukhdev rawat', sponsorId: 'IHH192108', joinDate: '23-06-2021', status: 'ACTIVE' },
  { memberId: 'IHH4500814', name: 'Sukhdev singh rawat', sponsorId: 'IHH5977055', joinDate: '23-06-2021', status: 'ACTIVE' },
  { memberId: 'IHH4016369', name: 'rahul rauthan', sponsorId: 'IHH4500814', joinDate: '23-06-2021', status: 'ACTIVE' },
  { memberId: 'IHH2724795', name: 'shusma gusain', sponsorId: 'IHH4016369', joinDate: '23-06-2021', status: 'ACTIVE' }
];

export const paymentRows = [
  {
    fromMemberId: 'IHH914239',
    fromName: 'Aaqa',
    toMemberId: 'IHH192108',
    toName: 'ANAMIKA SAXENA',
    amount: 50,
    requestDate: '16-September-2025 12:57:37PM',
    approveDate: '01-January-1970 05:30:00AM',
    status: 'Pending',
    level: 11
  },
  {
    fromMemberId: 'IHH8960797',
    fromName: 'Sureshbhai',
    toMemberId: 'IHH192108',
    toName: 'ANAMIKA SAXENA',
    amount: 50,
    requestDate: '16-September-2025 12:08:41PM',
    approveDate: '23-February-2026 23:28:45PM',
    status: 'Success',
    level: 11
  }
];

export const levelIncomeRows = [
  { level: 'Level-1', amount: 550 },
  { level: 'Level-2', amount: 400 },
  { level: 'Level-3', amount: 550 },
  { level: 'Level-4', amount: 350 },
  { level: 'Level-5', amount: 350 },
  { level: 'Level-6', amount: 300 },
  { level: 'Level-7', amount: 350 },
  { level: 'Level-8', amount: 400 },
  { level: 'Level-9', amount: 450 },
  { level: 'Level-10', amount: 500 }
];
