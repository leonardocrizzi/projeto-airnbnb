export interface AirnbnbApi {
    accommodation: Accomodation[]
    icons: Photo[]
}

export interface Accomodation {
    id: string
    title: string
    date: string
    testimonials: Testimonials[]
    hasBadge: boolean
    host: string
    slug: string
    location: Location
    price: number
    rating: number
    photos: Photo[]
}

export interface Testimonials {
    id: string
    name: string
    image: string
    comment: string
    rating: number
    customerTime: number
    createdAt: number
    stayedAt: number
}

export interface Photo {
    id: string
    source: string
    description: string
    url: string
}

export interface Location {
    description: string
    city: string
    state: string
    country: string
}
