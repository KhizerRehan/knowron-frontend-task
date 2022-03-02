    import React from "react";

    export function LanguagePills({props}) {
    return (
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                aria-controls="nav-home" aria-selected="true">Home</a>
                <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                aria-controls="nav-profile" aria-selected="false">Profile</a>
                <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
                aria-controls="nav-contact" aria-selected="false">Contact</a>
            </div>
        </nav>
    );
    }
