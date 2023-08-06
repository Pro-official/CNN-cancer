import React from "react";
import Navigation from "../App/components/Navbar";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";
import feature1 from "../public/images/feature1.jpg";

const inter = Inter({ subsets: ["latin"], weight: "800" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const cancer = () => {
  return (
    <>
      <Navigation />
      <article class="py-12 px-4 w-5xl">
        <h1
          className={`text-4xl font-bold text-center text-black mb-2 ${inter.className} `}
        >
          What is{" "}
          <span className="underline underline-offset-8 decoration-[#ca4242]">
            CANCER?
          </span>
        </h1>
        <p class="text-center mb-8">
          <span>06 August, by</span>
          <a class="ml-1 text-indigo-600 hover:underline" href="#">
            Promise Ghosh Chowdhury
          </a>
        </p>
        <Image
          src={feature1}
          className="max-w-5xl mx-auto mb-8"
          alt="cancer cell"
        />

        <div class="max-w-5xl mx-auto">
          <p className={`text-normal ${roboto.className} `}>
            <strong>Introduction</strong>
            <br />
            Cancer is a formidable adversary that has plagued humanity for
            centuries. Despite remarkable advances in medical science, this
            enigmatic disease continues to challenge researchers and healthcare
            professionals worldwide. The term cancer encompasses a broad
            spectrum of diseases, each unique in its origin and behavior, yet
            all characterized by the uncontrolled growth and spread of abnormal
            cells within the body. In this article, we delve into the
            fundamentals of cancer, exploring its causes, risk factors, and its
            impact on human health.
            <br />
            <strong>What is Cancer?</strong> <br />
            At its core, cancer is a collection of diseases characterized by the
            uncontrolled division and proliferation of cells, leading to the
            formation of malignant tumors. Normally, the body maintains a
            careful balance between cell growth and cell death. However, cancer
            disrupts this delicate equilibrium, giving rise to a rogue group of
            cells that escape regulatory mechanisms and rapidly multiply.
            <br />
            <strong>Cellular Origins</strong>
            <br />
            Cancer can arise from virtually any type of cell within the human
            body. While healthy cells follow a predetermined life cycle,
            cancerous cells defy this course, replicating at an abnormal rate
            and refusing to die when they should. These cancerous cells can form
            tumors or invade surrounding tissues and organs through a process
            known as metastasis.
            <br />
            <strong>The Role of Mutations</strong>
            <br />
            One of the critical factors contributing to cancer development is
            genetic mutations. These mutations can be inherited from parents or
            acquired during a person &apos; s lifetime due to environmental
            factors, lifestyle choices, or exposure to harmful substances.
            Mutations can alter the behavior of cells, disrupting their normal
            functions and paving the way for cancerous growth. <br />
            <strong>Types of Cancer</strong>
            <br />
            Cancer manifests in numerous forms, each classified based on the
            type of cell from which it originates. Some common types include
            breast cancer, lung cancer, prostate cancer, skin cancer, and
            leukemia. Additionally, cancers are also categorized by the tissues
            or organs they affect, leading to further subtypes and
            classifications.
            <br />
            <strong>Risk Factors</strong>
            <br />
            While the exact causes of many cancers remain unclear, certain risk
            factors have been identified that can increase an individual &apos;
            s likelihood of developing the disease. These risk factors include
            tobacco use, exposure to carcinogenic substances, excessive alcohol
            consumption, poor dietary habits, physical inactivity, obesity, and
            a family history of cancer.
            <br />
            <strong>Prevention and Early Detection</strong>
            <br />
            Preventing cancer remains an ongoing challenge, but adopting a
            healthy lifestyle can significantly reduce the risk. Engaging in
            regular physical activity, maintaining a balanced diet, avoiding
            tobacco and excessive alcohol consumption, and protecting the skin
            from the harmful effects of the sun are some ways individuals can
            proactively safeguard against cancer.
            <br />
            Early detection is equally crucial in the battle against cancer.
            Regular screenings, such as mammograms, Pap smears, and
            colonoscopies, can detect cancer at its early stages when treatment
            is often more effective. Prompt medical attention for any concerning
            symptoms or abnormalities can also lead to earlier diagnosis and
            improved outcomes.
            <br />
            <strong>Treatment Approaches</strong>
            <br />
            Cancer treatment approaches vary depending on the type and stage of
            cancer. They may include surgery, chemotherapy, radiation therapy,
            immunotherapy, targeted therapy, and hormone therapy. In recent
            years, advancements in precision medicine and personalized treatment
            options have shown promising results in tailoring therapies to
            individual patients based on their genetic makeup and specific tumor
            characteristics.
            <br />
            <strong>Conclusion</strong>
            <br />
            Cancer remains one of the most significant challenges in modern
            medicine. Its multifaceted nature and ability to adapt make it a
            formidable foe. However, ongoing research, early detection, and
            advancements in treatment modalities offer hope in the fight against
            cancer. By raising awareness, promoting prevention strategies, and
            supporting cancer research, we can collectively strive to reduce the
            burden of this devastating disease on individuals, families, and
            communities worldwide.
          </p>
        </div>
      </article>
    </>
  );
};

export default cancer;
