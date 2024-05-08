export interface CategoryOfTour {
      id: number;
      name: string;
}

export interface ImageTour {
      url: string;
      belongToTourId?: number;
}

export interface TourRender {
      id: number;
      name: string;
      slug: string;
      price: number;
      thumbnailUrl: string;
      durationDays: number;
      totalActivity: number;
      likedCounter: number;
      numberOfBooking: number;
      agency: AgencyRender;
      categrory?: CategoryOfTour;
      images?: ImageTour[];
      otherTourInTheSameAgency: any;
}

export interface AgencyRender {
      id?: number;
      name: string;
      avatarUrl: string;
      isCertificate: boolean;
      headOffice?: string;
}

export interface City {
      id?: number;
      name: string;
      belongToLocation?: number;
}

export interface LocationRender {
      id: number;
      destination: string;
      cities: City[];
}

// Output
export const categoriesOfTour: CategoryOfTour[] = [
      {
            id: 1,
            name: 'City Tour',
      },
      {
            id: 2,
            name: 'Hiking',
      },
      {
            id: 3,
            name: 'Luxury Travel',
      },
      {
            id: 4,
            name: 'Trekking',
      },
      {
            id: 5,
            name: 'The Package Holiday',
      },
];

export const tours: TourRender[] = [
      {
            id: 1,
            name: 'Tranquil Oasis',
            slug: 'tranquil-oasis',
            thumbnailUrl: '../../../assets/images/tour-12.jpeg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Agency 1',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 2,
            name: 'Whispering Pines Retreat',
            slug: 'whispering-pines-retreat',
            thumbnailUrl: '../../../assets/images/tour-10.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 3,
            name: 'Serene Haven Lodge',
            slug: 'serene-haven-lodge',
            thumbnailUrl: '../../../assets/images/tour-11.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Agency 2',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 4,
            name: 'Emerald Cove Resort',
            slug: 'emerald-cove-resort',
            thumbnailUrl: '../../../assets/images/tour-9.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Agency 3',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 5,
            name: 'Hidden Gem Chalet',
            slug: 'hidden-gem-chalet',
            thumbnailUrl: '../../../assets/images/tour-8.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: false,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 6,
            name: 'Mystic Mountain Lodge',
            slug: 'mystic-mountain-lodge',
            thumbnailUrl: '../../../assets/images/tour-7.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: false,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 7,
            name: 'Sunrise Vista Villa',
            slug: 'sunrise-vista-villa',
            thumbnailUrl: '../../../assets/images/tour-6.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Agency 4',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 8,
            name: 'Ocean Breeze Retreat',
            slug: 'ocean-breeze-retreat',
            thumbnailUrl: '../../../assets/images/tour-5.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 9,
            name: 'Enchanted Woods Cabin',
            slug: 'enchanted-woods-cabin',
            thumbnailUrl: '../../../assets/images/tour-4.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 10,
            name: 'Tranquility Bay Cottage',
            slug: 'tranquility-bay-cottage',
            thumbnailUrl: '../../../assets/images/tour-3.png',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
      {
            id: 11,
            name: 'Rustic Charm Hideaway Rustic Charm Hideaway',
            slug: 'rustic-charm-hideaway-rustic-charm-hideaway',
            thumbnailUrl: '../../../assets/images/tour-13.jpg',
            price: 895.5,
            durationDays: 9,
            totalActivity: 4,
            agency: {
                  avatarUrl: '../../../assets/images/agency-avatar.png',
                  name: 'Sost Brilliant Agency',
                  headOffice: 'San Francisco, CA',
                  isCertificate: true,
            },
            likedCounter: 110,
            numberOfBooking: 12,
            otherTourInTheSameAgency: [
                  {
                        thumbnailUrl: '../../../assets/images/tour-10.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-11.jpg',
                  },
                  {
                        thumbnailUrl: '../../../assets/images/tour-9.jpg',
                  },
            ],
      },
];

export const locations: LocationRender[] = [
      {
            id: 1,
            destination: 'Vietname',
            cities: [
                  {
                        name: 'Cat Ba',
                  },
                  {
                        name: 'Ha Noi',
                  },
                  {
                        name: 'Ha giang',
                  },
                  {
                        name: 'Ho Chi Minh',
                  },
                  {
                        name: 'Mai Chau',
                  },
                  {
                        name: 'Ninh Binh',
                  },
                  {
                        name: 'Sapa',
                  },
            ],
      },
      {
            id: 2,
            destination: 'Thailand',
            cities: [
                  {
                        name: 'Thailand Cat Ba',
                  },
                  {
                        name: 'Thailand Ha Noi',
                  },
                  {
                        name: 'Thailand Ha giang',
                  },
                  {
                        name: 'Thailand Ho Chi Minh',
                  },
                  {
                        name: 'Thailand Mai Chau',
                  },
                  {
                        name: 'Thailand Ninh Binh',
                  },
                  {
                        name: 'Thailand Sapa',
                  },
            ],
      },
      {
            id: 3,
            destination: 'Cambodia',
            cities: [
                  {
                        name: 'Cambodia Cat Ba',
                  },
                  {
                        name: 'Cambodia Ha Noi',
                  },
                  {
                        name: 'Cambodia Ha giang',
                  },
                  {
                        name: 'Cambodia Ho Chi Minh',
                  },
                  {
                        name: 'Cambodia Mai Chau',
                  },
                  {
                        name: 'Cambodia Ninh Binh',
                  },
                  {
                        name: 'Cambodia Sapa',
                  },
            ],
      },
      {
            id: 4,
            destination: 'Vietname other',
            cities: [
                  {
                        name: 'Cat Ba',
                  },
                  {
                        name: 'Ha Noi',
                  },
                  {
                        name: 'Ha giang',
                  },
                  {
                        name: 'Ho Chi Minh',
                  },
                  {
                        name: 'Mai Chau',
                  },
                  {
                        name: 'Ninh Binh',
                  },
                  {
                        name: 'Sapa',
                  },
            ],
      },
      {
            id: 5,
            destination: 'Thailand other',
            cities: [
                  {
                        name: 'Thailand Cat Ba',
                  },
                  {
                        name: 'Thailand Ha Noi',
                  },
                  {
                        name: 'Thailand Ha giang',
                  },
                  {
                        name: 'Thailand Ho Chi Minh',
                  },
                  {
                        name: 'Thailand Mai Chau',
                  },
                  {
                        name: 'Thailand Ninh Binh',
                  },
                  {
                        name: 'Thailand Sapa',
                  },
            ],
      },
      {
            id: 6,
            destination: 'Cambodia other',
            cities: [
                  {
                        name: 'Cambodia Cat Ba',
                  },
                  {
                        name: 'Cambodia Ha Noi',
                  },
                  {
                        name: 'Cambodia Ha giang',
                  },
                  {
                        name: 'Cambodia Ho Chi Minh',
                  },
                  {
                        name: 'Cambodia Mai Chau',
                  },
                  {
                        name: 'Cambodia Ninh Binh',
                  },
                  {
                        name: 'Cambodia Sapa',
                  },
            ],
      },
      {
            id: 7,
            destination: 'Vietname 1',
            cities: [
                  {
                        name: 'Cat Ba',
                  },
                  {
                        name: 'Ha Noi',
                  },
                  {
                        name: 'Ha giang',
                  },
                  {
                        name: 'Ho Chi Minh',
                  },
                  {
                        name: 'Mai Chau',
                  },
                  {
                        name: 'Ninh Binh',
                  },
                  {
                        name: 'Sapa',
                  },
            ],
      },
      {
            id: 8,
            destination: 'Thailand 1',
            cities: [
                  {
                        name: 'Thailand Cat Ba',
                  },
                  {
                        name: 'Thailand Ha Noi',
                  },
                  {
                        name: 'Thailand Ha giang',
                  },
                  {
                        name: 'Thailand Ho Chi Minh',
                  },
                  {
                        name: 'Thailand Mai Chau',
                  },
                  {
                        name: 'Thailand Ninh Binh',
                  },
                  {
                        name: 'Thailand Sapa',
                  },
            ],
      },
      {
            id: 9,
            destination: 'Cambodia 1',
            cities: [
                  {
                        name: 'Cambodia Cat Ba',
                  },
                  {
                        name: 'Cambodia Ha Noi',
                  },
                  {
                        name: 'Cambodia Ha giang',
                  },
                  {
                        name: 'Cambodia Ho Chi Minh',
                  },
                  {
                        name: 'Cambodia Mai Chau',
                  },
                  {
                        name: 'Cambodia Ninh Binh',
                  },
                  {
                        name: 'Cambodia Sapa',
                  },
            ],
      },
      {
            id: 10,
            destination: 'Vietname 2',
            cities: [
                  {
                        name: 'Cat Ba',
                  },
                  {
                        name: 'Ha Noi',
                  },
                  {
                        name: 'Ha giang',
                  },
                  {
                        name: 'Ho Chi Minh',
                  },
                  {
                        name: 'Mai Chau',
                  },
                  {
                        name: 'Ninh Binh',
                  },
                  {
                        name: 'Sapa',
                  },
            ],
      },
      {
            id: 11,
            destination: 'Thailand 2',
            cities: [
                  {
                        name: 'Thailand Cat Ba',
                  },
                  {
                        name: 'Thailand Ha Noi',
                  },
                  {
                        name: 'Thailand Ha giang',
                  },
                  {
                        name: 'Thailand Ho Chi Minh',
                  },
                  {
                        name: 'Thailand Mai Chau',
                  },
                  {
                        name: 'Thailand Ninh Binh',
                  },
                  {
                        name: 'Thailand Sapa',
                  },
            ],
      },
      {
            id: 12,
            destination: 'Cambodia 2',
            cities: [
                  {
                        name: 'Cambodia Cat Ba',
                  },
                  {
                        name: 'Cambodia Ha Noi',
                  },
                  {
                        name: 'Cambodia Ha giang',
                  },
                  {
                        name: 'Cambodia Ho Chi Minh',
                  },
                  {
                        name: 'Cambodia Mai Chau',
                  },
                  {
                        name: 'Cambodia Ninh Binh',
                  },
                  {
                        name: 'Cambodia Sapa',
                  },
            ],
      },
];
