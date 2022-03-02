import React from "react";

export function LanguagePills({ displaytextLangs, onLanguageSelect }) {
  const onTabSelected = (e) => {
    e.stopPropagation();
    const languageSelected = e.currentTarget.attributes.getNamedItem("data-lang").value;
    onLanguageSelect(languageSelected);
  };

  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        {displaytextLangs &&
        displaytextLangs.map(({ language, text }) => {
          return (
            <button className="nav-link active" id={`nav-${language}-tab`}
                    data-lang={`${language}`}
                    data-toggle="tab" href="#nav-home" role="tab"
                    onClick={onTabSelected}>
              {text}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
