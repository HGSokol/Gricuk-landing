export interface LanguageContextType {
	language: string;
	setLanguage: (language: string) => void;
}

export interface CardType {
	img: string;
	text: [string, string];
  link?: string
}