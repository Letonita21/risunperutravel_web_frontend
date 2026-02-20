export const getDictionary = async (lang) => {
  const supportedLangs = ["es", "en", "fr"];
  const safeLang = supportedLangs.includes(lang) ? lang : "es";

  try {
    const dict = await import(`./${safeLang}.json`);
    return dict.default;
  } catch (error) {
    console.error(`Error al cargar el diccionario para '${safeLang}':`, error);
    throw new Error("No se pudo cargar el diccionario");
  }
};