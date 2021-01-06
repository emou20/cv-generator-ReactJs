import React, { Component } from 'react';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular,TiSocialGithubCircular } from "react-icons/ti";

export default class Header extends Component {
    render() {
        return (
            <div className="container-fluid headerBandeHaut">
                <div className="container">
                    <a href="./" className="logoApp">GCV</a>
                    <div className="contIcons">
                        <a href="./" className="lineIcon"><TiSocialFacebookCircular /></a>
                        <a href="./" className="lineIcon"><TiSocialLinkedinCircular /></a>
                        <a href="./" className="lineIcon"><TiSocialGithubCircular /></a>
                    </div>
                </div>
            </div>
        )
    }
}
