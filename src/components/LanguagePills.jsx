import React from "react";

export function LanguagePills({ displaytextLangs, onLanguageSelect, lang }) {
  const onTabSelected = (e) => {
    e.stopPropagation();
    const languageSelected = e.currentTarget.attributes.getNamedItem("data-lang").value;
    onLanguageSelect(languageSelected);
  };

  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        {displaytextLangs &&
        displaytextLangs.map(({ language, text }, index) => {
          return (
            <a key={index} href={`#tab-${language}`} 
            className={`cursor nav-link ${language === lang  ? "active" : null}`}
            id={`nav-${language}-tab`}
                    data-lang={`${language}`}
                    data-toggle="tab" role="tab" onClick={onTabSelected}>
              {text}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
