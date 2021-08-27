
import ContainerBlock from "../components/ContainerBlock";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("common");
  
  return (
    <ContainerBlock
      title="Sophia Qureshi"
    >
 
    <div className="flex flex-row justify-center items-start overflow-hidden">


      <div className="w-full md:w-1/2 text-center md:text-left lg:p-20">
            <h1 className="text-4xl md:text-8xl font-bold text-green-900">
              {t("welcome")}
             

            </h1>
            <p className="font-mono text-xs">
              {t("switcher")}
            
            <Link
            href={`/fr/`}
            locale="fr"
            >
            <p className="font-mono text-xs">
            {t("french")}
            </p>
          </Link>
          <Link
            href={`/`}
            locale="en"
            >
            <p className="font-mono text-xs">
            {t("english")}
            </p>
          </Link>
          </p>
      </div>
  
      <div className="hidden lg:block relative w-1/2 md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <div className="flex flex-col justify-between mt-4">
            <div className="flex flex-col space-x-4">
              <p className="font-mono"> {t("message")}
            </p>
            </div>
            <div className="flex flex-col space-x-4 mt-10">
              <p className="font-mono">
              {t("instructions")}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ContainerBlock>
  );
}

interface props
{
  locale: string;
}

export const getStaticProps = async ({ locale }: props) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Home;