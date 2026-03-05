export const epinRequestRows = [
  {
    id: 1,
    clientId: 'DT781347',
    name: 'REKHA DEVI',
    packageCost: 'Activation-10.00',
    qty: 100,
    paidAmount: '999999.99',
    mobile: '7004681263',
    date: '19-11-2024',
    status: 'Approved'
  },
  {
    id: 2,
    clientId: 'DT944734',
    name: 'SEEMA',
    packageCost: 'Activation-10.00',
    qty: 100,
    paidAmount: '100.00',
    mobile: '9931330387',
    date: '19-11-2024',
    status: 'Approved'
  },
  {
    id: 3,
    clientId: 'DT101010',
    name: 'AASHA ASHIYANA ATITHI SEVA HRIDAY AASHRAM',
    packageCost: 'Activation-10.00',
    qty: 2,
    paidAmount: '20.00',
    mobile: '9229510609',
    date: '19-11-2024',
    status: 'Approved'
  }
];

export const epinRows = [
  {
    id: 1,
    epinName: 'Activation',
    epin: 'EPR1832459',
    cost: '10',
    genDate: '27-02-2026',
    genBy: 'DT101010',
    currentOwner: 'DT101010',
    status: 'Unused',
    usedBy: '-',
    usedDate: '-'
  },
  {
    id: 2,
    epinName: 'Activation',
    epin: 'EPR1276502',
    cost: '10',
    genDate: '27-02-2026',
    genBy: 'DT101010',
    currentOwner: 'DT101010',
    status: 'Unused',
    usedBy: '-',
    usedDate: '-'
  },
  {
    id: 3,
    epinName: 'Activation',
    epin: 'EPR1055966',
    cost: '10',
    genDate: '27-02-2026',
    genBy: 'DT101010',
    currentOwner: 'DT101010',
    status: 'Unused',
    usedBy: '-',
    usedDate: '-'
  },
  {
    id: 4,
    epinName: 'Activation',
    epin: 'EPR1980434',
    cost: '10',
    genDate: '19-11-2024',
    genBy: 'AH781347',
    currentOwner: 'AH781347',
    status: 'Used',
    usedBy: 'AH736651',
    usedDate: '22-11-2024'
  },
  {
    id: 5,
    epinName: 'Activation',
    epin: 'EPR1106324',
    cost: '10',
    genDate: '19-11-2024',
    genBy: 'AH781347',
    currentOwner: 'AH781347',
    status: 'Used',
    usedBy: 'AH517477',
    usedDate: '22-11-2024'
  },
  {
    id: 6,
    epinName: 'Activation',
    epin: 'EPR1018896',
    cost: '10',
    genDate: '19-11-2024',
    genBy: 'AH781347',
    currentOwner: 'AH781347',
    status: 'Used',
    usedBy: 'AH618556',
    usedDate: '22-11-2024'
  },
  {
    id: 7,
    epinName: 'Activation',
    epin: 'EPR1145517',
    cost: '10',
    genDate: '27-02-2026',
    genBy: 'DT101010',
    currentOwner: 'DT101010',
    status: 'Deleted',
    usedBy: '-',
    usedDate: '-'
  }
];

export const epinTransferRows = [
  {
    id: 1,
    epin: 'EPR1832459',
    fromMember: 'DT101010',
    toMember: 'DT781347',
    transferDate: '03-06-2026 11:22 AM',
    amount: '10.00',
    status: 'Success'
  },
  {
    id: 2,
    epin: 'EPR1276502',
    fromMember: 'DT101010',
    toMember: 'DT944734',
    transferDate: '03-06-2026 12:08 PM',
    amount: '10.00',
    status: 'Success'
  },
  {
    id: 3,
    epin: 'EPR1055966',
    fromMember: 'DT101010',
    toMember: 'DT900001',
    transferDate: '03-06-2026 01:45 PM',
    amount: '10.00',
    status: 'Pending'
  }
];
