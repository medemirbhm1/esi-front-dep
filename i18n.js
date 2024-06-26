import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "fr", "ar"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  const messages = {
    ...(await import(`./messages/${locale}.json`)).default,
    ...(await import(`./messages/studies/${locale}.json`)).default,
    ...(await import(`./messages/partners/${locale}.json`)).default,
    ...(await import(`./messages/school/${locale}.json`)).default,
    ...(await import(`./messages/login/${locale}.json`)).default,
    ...(await import(`./messages/profile/${locale}.json`)).default,
      ...((await import(`./messages/clubs/${locale}.json`)).default),
    ...((await import(`./messages/esi_tour/${locale}.json`)).default),
    ...((await import(`./messages/biblio/${locale}.json`)).default),
    ...((await import(`./messages/esi_tour/esi_tour_form/${locale}.json`)).default),
  };
  return {

    messages,
  };
});
