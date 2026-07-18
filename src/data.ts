import {
  CandidateProfile,
  EducationItem,
  FinancialSummary,
  MovableAssets,
  ImmovableAssets,
  Liabilities,
  CriminalCase,
  CampaignHistoryItem,
  PadyatraSection
} from "./types";

export const PROFILE: CandidateProfile = {
  name: "Prashant Kishor",
  age: 49,
  dob: "March 1977",
  fatherName: "Late Shrikant Pandey",
  spouseName: "Mrs. Jahnavi Das",
  email: "KISHORPRASHANT@GMAIL.COM",
  contactNumber: "+91 9998656033",
  twitterUrl: "https://x.com/PrashantKishor",
  partyName: "Jan Suraaj Party",
  constituencyName: "182-Bankipur, Patna, Bihar",
  homeAddress: "H.No 53, Village & P.O Konar, PS Shivsagar, District Rohtas, Bihar - 821113"
};

export const EDUCATION_QUALIFICATIONS: EducationItem[] = [
  {
    degree: "Matriculation (10th)",
    institution: "M.P High School, Buxar",
    boardOrUniversity: "Bihar School Examination Board",
    year: 1991,
    description: "Completed secondary education in Buxar, Bihar."
  },
  {
    degree: "Intermediate (12th)",
    institution: "Patna Science College, Patna",
    boardOrUniversity: "Bihar Intermediate Education Council",
    year: 1993,
    description: "Specialized in Science at Bihar's premier science college."
  },
  {
    degree: "Graduation (Bachelor of Business Administration - BBA)",
    institution: "Department of Business Studies",
    boardOrUniversity: "University of Lucknow, Uttar Pradesh",
    year: 1999,
    description: "Undergraduate degree in Business Management."
  },
  {
    degree: "Post-Graduation (Master of Healthcare Management - MHA)",
    institution: "Administrative Staff College of India (ASCI), Hyderabad",
    boardOrUniversity: "Developed in collaboration with Johns Hopkins University (USA) & Hinduja Hospital",
    year: 2003,
    description: "Specialized in international public health administration."
  },
  {
    degree: "Intensive Language Certification",
    institution: "CAVILAM VICHY",
    boardOrUniversity: "Clermont Ferrand University, France",
    year: 2010,
    description: "Completed intensive training in French language for global health assignments."
  }
];

export const FINANCIAL_YEARS_INCOME: FinancialSummary[] = [
  {
    financialYear: "FY 2024-25",
    incomeSelf: 5845430,
    incomeSpouse: 4023800,
    notesSelf: "Self income after a significant 10 Crore Rupees donation made to Jan Suraaj Party under Section 80GGC of the Income Tax Act.",
    notesSpouse: "Stable professional consultancy and clinical advisory income."
  },
  {
    financialYear: "FY 2023-24",
    incomeSelf: 88926320,
    incomeSpouse: 4186810,
    notesSelf: "Peak professional income from consultancy. Includes 50 Lakhs Rupees donation made to Joy of Giving Global Foundation under Section 80G.",
    notesSpouse: "MBBS clinical consultant."
  },
  {
    financialYear: "FY 2022-23",
    incomeSelf: 4449340,
    incomeSpouse: 3463060
  },
  {
    financialYear: "FY 2021-22",
    incomeSelf: 6004440,
    incomeSpouse: 1808250
  },
  {
    financialYear: "FY 2020-21",
    incomeSelf: 866520,
    incomeSpouse: 614790
  }
];

export const MOVABLE_ASSETS: MovableAssets = {
  cashInHand: {
    self: 65570,
    spouse: 195200
  },
  deposits: [
    { holder: "Self", institution: "HDFC Bank (Faridabad Branch, Sector 9) - FD 1", type: "Fixed Deposit", amount: 726715 },
    { holder: "Self", institution: "HDFC Bank (Faridabad Branch, Sector 9) - FD 2", type: "Fixed Deposit", amount: 609591 },
    { holder: "Self", institution: "HDFC Bank (Faridabad Branch, Sector 9) - FD 3", type: "Fixed Deposit", amount: 22287896 },
    { holder: "Self", institution: "HDFC Bank (Faridabad Branch, Sector 9) - FD 4", type: "Fixed Deposit", amount: 23000000 },
    { holder: "Self", institution: "HDFC Bank (Faridabad Branch, Sector 9) - FD 5", type: "Fixed Deposit", amount: 27000000 },
    { holder: "Self", institution: "Standard Chartered Bank (Patna A/c)", type: "Savings Account", amount: 24844 },
    { holder: "Spouse", institution: "Standard Chartered Bank (Guwahati Branch) - FD 1", type: "Fixed Deposit", amount: 500000 },
    { holder: "Spouse", institution: "Standard Chartered Bank (Guwahati Branch) - FD 2", type: "Fixed Deposit", amount: 500000 },
    { holder: "Spouse", institution: "Standard Chartered Bank (Guwahati Branch) - FD 3", type: "Fixed Deposit", amount: 4000000 },
    { holder: "Spouse", institution: "Standard Chartered Bank (Guwahati Branch) - FD 4", type: "Fixed Deposit", amount: 1700000 },
    { holder: "Spouse", institution: "Sriram Finance (Delhi FD)", type: "Fixed Deposit", amount: 2021878 },
    { holder: "Spouse", institution: "HDFC Bank (Guwahati A/c) - Savings", type: "Savings Account", amount: 2629863 },
    { holder: "Spouse", institution: "Standard Chartered Bank (Guwahati A/c) - Savings", type: "Savings Account", amount: 2019985 },
    { holder: "Dependent", institution: "HDFC Bank (Guwahati Branch) - FD A", type: "Fixed Deposit", amount: 300000 },
    { holder: "Dependent", institution: "HDFC Bank (Guwahati Branch) - FD B", type: "Fixed Deposit", amount: 300000 },
    { holder: "Dependent", institution: "HDFC Bank (Guwahati A/c) - Savings", type: "Savings Account", amount: 97968 },
    { holder: "Dependent", institution: "Standard Chartered Bank (Guwahati A/c) - Savings", type: "Savings Account", amount: 21313 }
  ],
  investments: [
    { holder: "Self", companyName: "Bharti Airtel Ltd. (1,985 shares)", sharesCount: 1985, value: 3811994 },
    { holder: "Self", companyName: "Indian Overseas Bank (73,243 shares)", sharesCount: 73243, value: 2532743 },
    { holder: "Spouse", companyName: "Mutual Funds (Multiple and varied)", sharesCount: 0, value: 12472270 },
    { holder: "Spouse", companyName: "Vedhas Ventures Pvt Ltd. (100% controlling stake jointly with self)", sharesCount: 10000, value: 952605542 }
  ],
  insurance: [
    { holder: "Self", companyName: "HDFC Life Insurance Co. (Policy No. 30751829)", policyDetails: "Maturity 28/08/2026", value: 40899079 },
    { holder: "Self", companyName: "HDFC Life Insurance Co. (Policy No. 30751987)", policyDetails: "Maturity 28/08/2026", value: 12600044 }
  ],
  loansGiven: [
    { holder: "Self", to: "Vedhas Ventures Private Limited (Capital Advance)", amount: 83150000 },
    { holder: "Spouse", to: "Prashant Kishor (Personal Loan)", amount: 4188373 }
  ],
  jewellery: [
    { holder: "Self", description: "Gold Ring with Emerald stone", weightGrams: 0.6, value: 135000 },
    { holder: "Spouse", description: "Gold Ornaments & Jewellery", weightGrams: 475, value: 3500000 },
    { holder: "Spouse", description: "Silver Articles", weightGrams: 200, value: 46000 }
  ],
  interestAccrued: [
    { holder: "Self", type: "Accrued interest on Fixed Deposits (as of 11.07.2026)", amount: 3144000 }
  ],
  totalValue: {
    self: 221974976, // 22.19 Crores
    spouse: 895167249, // 89.51 Crores
    dependent: 719281 // 7.19 Lakhs
  }
};

export const IMMOVABLE_ASSETS: ImmovableAssets = {
  agriculturalLand: {
    hasAny: false,
    details: "No agricultural land holdings are registered in the candidate's name or family member's names."
  },
  nonAgriculturalLand: [
    {
      description: "Dismantled Rice Mill (Shri Ram Ultra Modern Rice Mill), Konar Village, Shivsagar, District Rohtas, Bihar (Khata No. 237, Survey No. 1468, 1469)",
      area: "3 Acres and 21 Dismils",
      purchaseYear: 2014,
      purchaseCost: 2500000,
      currentMarketValue: 97500000 // 9.75 Crores
    }
  ],
  residentialBuildings: [
    {
      description: "Plot No-147, Mohalla- New Patliputra Colony, Phulwari Sharif, Patna, Bihar",
      areaSqFt: 7725,
      purchaseYear: 2024,
      purchaseCost: 97712560,
      currentMarketValue: 160000000 // 16.0 Crores
    },
    {
      description: "Property No. 61, Paschimi Marg, Vasant Vihar, New Delhi - 110057",
      areaSqFt: 4561,
      purchaseYear: 2022,
      purchaseCost: 110764196,
      currentMarketValue: 225000000 // 22.5 Crores
    },
    {
      description: "Apartment No. 03233, Tower No. 3, ATS Advantage, Indirapuram, Ghaziabad, Uttar Pradesh",
      areaSqFt: 2140,
      purchaseYear: 2017,
      purchaseCost: 16051500,
      currentMarketValue: 35000000 // 3.5 Crores
    },
    {
      description: "Apartment No. 03234, Tower No. 3, ATS Advantage, Indirapuram, Ghaziabad, Uttar Pradesh",
      areaSqFt: 2140,
      purchaseYear: 2016,
      purchaseCost: 10052000,
      currentMarketValue: 55000000 // 5.5 Crores
    },
    {
      description: "50% Share in Undividable Flats (A8-1403 & A8-1404), Olive County, Sector 5, Vasundhra, Ghaziabad, UP (Held in the name of late mother Indira Pandey)",
      areaSqFt: 1935,
      purchaseYear: 2011, // Allotted to builder
      purchaseCost: 0, // Inherited / Mother's name
      currentMarketValue: 25000000, // 2.5 Crores (PK Share value of 50%)
      sharePercent: "50% Joint Share"
    },
    {
      description: "Residential Property in Buxar, Bihar (Plot No 1769, 1771, 1772 - held in name of late mother Indira Pandey)",
      areaSqFt: 6500,
      purchaseYear: 2011,
      purchaseCost: 0,
      currentMarketValue: 50000000, // 5 Crores
      sharePercent: "Mother's Estate"
    },
    {
      description: "1/10 Share in Undivided Ancestral House, Village Konar, Rohtas, Bihar (held in name of late grandfather Raghuvir Pandey)",
      areaSqFt: 1400,
      purchaseYear: 2010,
      purchaseCost: 0,
      currentMarketValue: 12000000, // 1.2 Crores
      sharePercent: "1/10 Ancestral Share"
    },
    {
      description: "Residential Flat - 6D, 6th Floor, Abode Grand, GS Road, Dispur, Guwahati, Assam (Spouse's asset)",
      areaSqFt: 1405,
      purchaseYear: 2016,
      purchaseCost: 5719270,
      currentMarketValue: 12000000 // 1.2 Crores
    },
    {
      description: "Residential Flat - 8th Floor, Abir Kunj Apartment, Mother Teresa Road, Guwahati, Assam (Spouse's asset)",
      areaSqFt: 4000,
      purchaseYear: 2011,
      purchaseCost: 4300000,
      currentMarketValue: 35000000 // 3.5 Crores
    },
    {
      description: "1/3 Share in Undivided Bungalow, 305, Zoo Narangi Road, Gita Nagar, Guwahati, Assam (Spouse's asset)",
      areaSqFt: 1230,
      purchaseYear: 2011,
      purchaseCost: 0,
      currentMarketValue: 7200000 // 72 Lakhs
    }
  ],
  totalValue: {
    self: 738700000, // 73.87 Crores
    spouse: 124200000 // 12.42 Crores
  }
};

export const LIABILITIES: Liabilities = {
  self: [
    {
      description: "Home Loan against residential property (Sector 9, Faridabad)",
      amount: 57753765,
      creditor: "HDFC Bank Ltd, Faridabad"
    }
  ],
  spouse: [
    {
      description: "Personal / Professional Loan Advance",
      amount: 5000000,
      creditor: "Akriti Financial Services Private Limited"
    },
    {
      description: "Refundable Security Deposit against property rental",
      amount: 538000,
      creditor: "Rental Tenant"
    }
  ],
  totalValue: {
    self: 57753765, // 5.77 Crores
    spouse: 5538000 // 55.38 Lakhs
  }
};

export const CRIMINAL_CASES: CriminalCase[] = [
  {
    firNo: "FIR No- 815/2024",
    policeStation: "Gandhi Maidan PS, Patna",
    date: "29.12.2024",
    court: "S.D.J.M Patna",
    sections: "U/s 191(2), 191(3), 190, 223, 131, 132, 324(4) of Bharatiya Nyaya Sanhita (BNS)",
    description: "Related to assembly of citizens during political awareness program. Allegations include unlawful assembly, obstructing a public servant, causing public way obstruction, and voluntarily causing hurt during a political protest rally.",
    chargesFramed: false,
    appealsFiled: "Cr.W.J.C No. 141/2025 at Patna High Court (Pending revision & stay of proceeding)"
  },
  {
    firNo: "FIR No- 154/2025",
    policeStation: "Sachivalaya PS, Patna",
    date: "23.07.2025",
    court: "ACJM-II, Patna",
    sections: "U/s 191(2), 190, 132, 223 of BNS",
    description: "Related to political gathering. Accusations of unlawful assembly and obstructing public servants during discharge of official duty during peaceful protests of Jan Suraaj volunteers.",
    chargesFramed: false,
    appealsFiled: "Cr.W.J.C No. 2323/2025 at Patna High Court"
  },
  {
    firNo: "FIR No- 12/2025",
    policeStation: "Pirbahore PS, Patna",
    date: "06.01.2025",
    court: "CJM Patna",
    sections: "U/s 191(2), 190, 126(2), 115(2), 117(2), 132, 61(2) of BNS",
    description: "Wrongful restraint, abetment, criminal conspiracy, and obstructing public servants in connection with a local Jan Suraaj meeting and street padyatra in Patna.",
    chargesFramed: false,
    appealsFiled: "Cr.W.J.C No. 317/2025 at Patna High Court"
  },
  {
    firNo: "FIR No- 05/2025",
    policeStation: "Gandhi Maidan PS, Patna",
    date: "02.01.2025",
    court: "S.D.J.M Patna",
    sections: "U/s 191(2), 191(3), 190, 223 of BNS",
    description: "Alleged unlawful assembly, rioting, and obstructing public servants during entry of Jan Suraaj delegates at Gandhi Maidan.",
    chargesFramed: false,
    appealsFiled: "Cr.W.J.C No. 346/2025 at Patna High Court"
  },
  {
    firNo: "FIR No- 226/2025",
    policeStation: "Saharsa Sadar PS, Saharsa",
    date: "31.10.2025",
    court: "CJM Saharsa",
    sections: "U/s 115(2), 61(1), 191(1), 318(4), 316(2) of BNS",
    description: "Accusations of defamation and common liability based on a political speech criticizing local governing authorities and corruption in regional projects.",
    chargesFramed: false,
    appealsFiled: "No Appeal Filed (At investigation stage)"
  },
  {
    firNo: "Cr. Complaint Case No 6989 (C)/2025",
    policeStation: "CJM Patna",
    date: "2025",
    court: "CJM Patna",
    sections: "U/s 223(a), 3(5) of BNS",
    description: "Defamation complaint filed by a political opponent for public statements made during Jan Suraaj media briefs. Currently at pre-cognizance inquiry stage.",
    chargesFramed: false,
    appealsFiled: "Under evaluation at Patna High Court"
  },
  {
    firNo: "Cr. Complaint Case No 1934 (C)/2025",
    policeStation: "CJM Bettiah",
    date: "23.09.2025",
    court: "CJM Bettiah",
    sections: "U/s 356(2) of BNS (Criminal Defamation)",
    description: "Defamation complaint in West Champaran court regarding campaign remarks detailing systemic corruption in development funds. Pre-cognizance stage.",
    chargesFramed: false,
    appealsFiled: "Not Applicable"
  },
  {
    firNo: "Cr. Complaint Case No 11/2025 (C)/2025",
    policeStation: "ACJM-I, West Muzaffarpur",
    date: "03.01.2025",
    court: "ACJM-I, West Muzaffarpur",
    sections: "U/s 356 of BNS (Criminal Defamation)",
    description: "Private complaint claiming criminal defamation and conspiracy over PK's public speeches on developmental deficiencies and administrative failures in Muzaffarpur.",
    chargesFramed: false,
    appealsFiled: "Not Applicable"
  }
];

export const CAMPAIGN_HISTORY: CampaignHistoryItem[] = [
  {
    year: 2012,
    election: "Gujarat Assembly Elections",
    client: "Narendra Modi (BJP)",
    result: "Winner",
    highlight: "First major strategic breakthrough",
    description: "PK designed innovative campaign templates focusing on development and sub-national pride, securing Narendra Modi's 3rd consecutive term as CM of Gujarat."
  },
  {
    year: 2014,
    election: "Indian Lok Sabha General Elections",
    client: "Narendra Modi (BJP)",
    result: "Winner",
    highlight: "Redefined Indian political campaigning globally",
    description: "As the principal strategist through Citizens for Accountable Governance (CAG), PK orchestrated viral, iconic campaigns including 'Chai Pe Charcha', '3D Hologram Rallies', and 'Run for Unity' to secure a landslide majority for the BJP."
  },
  {
    year: 2015,
    election: "Bihar Assembly Elections",
    client: "Mahagathbandhan (JD(U) - RJD - Congress)",
    result: "Winner",
    highlight: "Defeated the BJP electoral juggernaut",
    description: "Co-founded I-PAC (Indian Political Action Committee). Successfully united sworn rivals Nitish Kumar and Lalu Prasad Yadav, engineering the massive victory of the Grand Alliance in Bihar."
  },
  {
    year: 2017,
    election: "Punjab Assembly Elections",
    client: "Captain Amarinder Singh (Congress)",
    result: "Winner",
    highlight: "Secured Congress' comeback in Punjab",
    description: "Formulated the 'Punjab Da Captain' and 'Halke Vich Captain' campaigns, addressing agrarian issues and drug abuse directly to win 77 out of 117 seats."
  },
  {
    year: 2019,
    election: "Andhra Pradesh Assembly Elections",
    client: "Y.S. Jagan Mohan Reddy (YSRCP)",
    result: "Winner",
    highlight: "Landslide victory of 151 out of 175 assembly seats",
    description: "Crafted the historic 3,648 km Padyatra 'Prajadeevana' for Jagan, highlighting rural distress. Overthrew the incumbent TDP in a historic sweep."
  },
  {
    year: 2020,
    election: "Delhi Assembly Elections",
    client: "Arvind Kejriwal (AAP)",
    result: "Winner",
    highlight: "Secured 62 out of 70 seats",
    description: "Formulated the 'Lage Raho Kejriwal' campaign focusing strictly on performance delivery in education, healthcare, and utilities (free water & electricity)."
  },
  {
    year: 2021,
    election: "Tamil Nadu Assembly Elections",
    client: "M.K. Stalin (DMK)",
    result: "Winner",
    highlight: "Returned DMK to power after 10 years",
    description: "Designed 'Ondrinaivom Vaa' (Let's come together) during Covid-19 to provide relief, and 'Stalinin Ezhu Urudhimozhigal' (Stalin's 7 Promises) to secure Tamil Nadu."
  },
  {
    year: 2021,
    election: "West Bengal Assembly Elections",
    client: "Mamata Banerjee (All India Trinamool Congress)",
    result: "Winner",
    highlight: "Fiercest political battle of modern India",
    description: "Designed the highly successful 'Bangla Nijer Meyekei Chay' (Bengal wants its own daughter) and 'Duare Sarkar' (Government at your doorstep) campaign. Overcame massive BJP national opposition, winning 213/294 seats. PK then retired from consulting."
  }
];

export const PADYATRA_INFO: PadyatraSection = {
  title: "The Jan Suraaj Padyatra",
  dateRange: "2nd October 2022 to October 2024 (Barefoot March across Bihar)",
  distanceCovered: "3,000+ Kilometers walked continuously",
  keyAims: [
    "Identify 'Sahi Log' (Right people): Discover honest, competent local leaders from grassroots levels.",
    "Understand ground realities: Listen to local problems in education, employment, flood management, and agriculture directly from villagers.",
    "Draft a collective vision: Formulate regional development plans based on empirical community needs rather than top-down policies."
  ],
  impactDescription: "Prashant Kishor walked barefoot across all 38 districts of Bihar. He conducted thousands of street corner meetings, stayed overnight in tents with villagers, and built a massive, decentralized citizen network. This Padyatra paved the way for the formal transition into the Jan Suraaj Party on Gandhi Jayanti (2nd October 2024), contesting elections under the vision of bringing genuine 'Good Governance' (Suraaj) to Bihar."
};
