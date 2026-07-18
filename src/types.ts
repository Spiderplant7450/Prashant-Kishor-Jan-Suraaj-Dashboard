/**
 * Types and interfaces for the Prashant Kishor Dashboard Portal
 */

export interface CandidateProfile {
  name: string;
  age: number;
  dob: string;
  fatherName: string;
  spouseName: string;
  email: string;
  contactNumber: string;
  twitterUrl: string;
  partyName: string;
  constituencyName: string;
  homeAddress: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  year: number;
  description?: string;
}

export interface FinancialSummary {
  financialYear: string;
  incomeSelf: number;
  incomeSpouse: number;
  notesSelf?: string;
  notesSpouse?: string;
}

export interface BankDeposit {
  holder: "Self" | "Spouse" | "Dependent";
  institution: string;
  type: "Fixed Deposit" | "Savings Account" | "Other";
  amount: number;
  dateOrDetails?: string;
}

export interface ShareInvestment {
  holder: "Self" | "Spouse" | "Dependent";
  companyName: string;
  sharesCount: number;
  value: number;
}

export interface InsurancePolicy {
  holder: "Self" | "Spouse" | "Dependent";
  companyName: string;
  policyDetails: string;
  value: number;
}

export interface MovableAssets {
  cashInHand: {
    self: number;
    spouse: number;
  };
  deposits: BankDeposit[];
  investments: ShareInvestment[];
  insurance: InsurancePolicy[];
  loansGiven: {
    holder: "Self" | "Spouse";
    to: string;
    amount: number;
  }[];
  jewellery: {
    holder: "Self" | "Spouse";
    description: string;
    weightGrams: number;
    value: number;
  }[];
  interestAccrued: {
    holder: "Self" | "Spouse";
    type: string;
    amount: number;
  }[];
  totalValue: {
    self: number;
    spouse: number;
    dependent: number;
  };
}

export interface ImmovableAssets {
  agriculturalLand: {
    hasAny: boolean;
    details: string;
  };
  nonAgriculturalLand: {
    description: string;
    area: string;
    purchaseYear: number;
    purchaseCost: number;
    currentMarketValue: number;
  }[];
  residentialBuildings: {
    description: string;
    areaSqFt: number;
    purchaseYear: number;
    purchaseCost: number;
    currentMarketValue: number;
    sharePercent?: string;
  }[];
  totalValue: {
    self: number;
    spouse: number;
  };
}

export interface Liabilities {
  self: {
    description: string;
    amount: number;
    creditor: string;
  }[];
  spouse: {
    description: string;
    amount: number;
    creditor: string;
  }[];
  totalValue: {
    self: number;
    spouse: number;
  };
}

export interface CriminalCase {
  firNo: string;
  policeStation: string;
  date: string;
  court: string;
  sections: string;
  description: string;
  chargesFramed: boolean;
  appealsFiled: string;
}

export interface CampaignHistoryItem {
  year: number;
  election: string;
  client: string;
  result: "Winner" | "Lost" | "Key Role";
  highlight: string;
  description: string;
  imageUrl?: string;
}

export interface PadyatraSection {
  title: string;
  dateRange: string;
  distanceCovered: string;
  keyAims: string[];
  impactDescription: string;
}
