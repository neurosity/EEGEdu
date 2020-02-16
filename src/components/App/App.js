import React from "react";
import { PageSwitcher } from "../PageSwitcher/PageSwitcher";
import { AppProvider, Card, Page, Link } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

export function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title={"EEGEdu"} 
            subtitle={[
              "Welcome to the EEGEdu live EEG tutorial. ",
              "This tutorial will help you learn about how neurons produce electrical activity we can measure. ",
              "By sticking electrodes on the head we can pick up these changes in electricity. ",
              "The tutorial will walk you through the basics of EEG signal generation, data collection, and analysis with a focus on live control based on physiological signals. ",
              "All demos are done in this browser. ",
              "This tutorial is designed to be used with the Muse and the Muse 2 headbands from Interaxon. ",
              "If you do not have one handy, there is an option to stream mock data as well. ",
              "Muse with two auxillary ports made in 2014 will not work. ",
              "This tutorial has been tested on Android Pixels (Mobile) and Mac OSX (laptop) with the latest chrome browser. ",
              "The first step will be to turn on your Muse headband and click the connect button. ",
              "This will open a screen and will list available Muse devices. ",
              "Select the serial number written on your Muse. ",
              "If you do not have a Muse headband you can click the Mock Data button to use simluated data. ",
              "Then scroll down to see you live brain activity!"
            ]}
        >
        <PageSwitcher />
        <Card sectioned>
          <p>{"EEGEdu - An Interactive Electrophysiology Tutorial with the Muse brought to you by Mathewson Sons."}
          A  
          <Link url="http://kylemathewson.com"> Ky</Link>
          <Link url="http://korymathewson.com">Kor</Link>
          <Link url="http://keyfer.ca">Key </Link>
          Production.
          <Link url="https://github.com/kylemath/EEGEdu/"> Github source code </Link>
        </p>
        </Card>
      </Page>
    </AppProvider>
  );
}
