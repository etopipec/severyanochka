interface CatalogStore {
  sections: CatalogSection[];
}

interface CatalogSection {
  label: string;
  link: string;
}

export { type CatalogSection, type CatalogStore };
