export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface SelectedImage {
  imageUrl: string;
  imageAlt: string;
}
