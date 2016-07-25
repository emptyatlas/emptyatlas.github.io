'use strict';

/**
 * @ngdoc overview
 * @name emptyatlasgithubioApp
 * @description
 * # emptyatlasgithubioApp
 */
angular.module('emptyatlasgithubioApp').service('MerchService', function () {

    this.squareStoreLink = 'https://squareup.com/store/empty-atlas-music';
    var squareStoreLink = this.squareStoreLink;
    var cremeLogoTShirtLink = squareStoreLink + '/item/creme-logo-t-shirt';
    var redCompassTShirtLink = squareStoreLink + '/item/red-compass-t-shirt';
    var lightGreyLogoTShirtLink = squareStoreLink + '/item/light-grey-logo-t-shirt';
    var blueCompassTShirtLink = squareStoreLink + '/item/blue-compass-t-shirt';
    var anniversaryCdLink = squareStoreLink + '/item/anniversary-cd';
    var supportTheBandLink = squareStoreLink + '/item/support-the-band';

    this.merchList = [{
        name: 'CREME LOGO T SHIRT',
        siteName: 'Empty Atlas Music',
        buyFor: 'SOLD OUT',
        action: 'SOLD OUT',
        link: cremeLogoTShirtLink,
        imagePath: '/images/merch/creme_logo_sold_out.png'
                        }, {
        name: 'RED COMPASS T SHIRT',
        siteName: 'Empty Atlas Music',
        buyFor: 'Buy for $10.00',
        action: 'BUY ONLINE',
        link: redCompassTShirtLink,
        imagePath: '/images/merch/red_compass.png'
                        }, {
        name: 'GREY LOGO T SHIRT',
        siteName: 'Empty Atlas Music',
        buyFor: 'Buy for $10.00',
        action: 'BUY ONLINE',
        link: lightGreyLogoTShirtLink,
        imagePath: '/images/merch/grey_logo.png'
                        }, {
        name: 'BLUE COMPASS T SHIRT',
        siteName: 'Empty Atlas Music',
        buyFor: 'Buy for $10.00',
        action: 'BUY ONLINE',
        link: blueCompassTShirtLink,
        imagePath: '/images/merch/blue_compass.png'
                        }, {
        name: 'ANNIVERSARY CD',
        siteName: 'Empty Atlas Music',
        buyFor: 'Buy for $5.00',
        action: 'BUY ONLINE',
        link: anniversaryCdLink,
        imagePath: '/images/merch/anniversary.png'
                        }, {
        name: 'SUPPORT THE BAND',
        siteName: 'Empty Atlas Music',
        buyFor: 'Any Amount',
        action: 'DONATE',
        link: supportTheBandLink,
        imagePath: '/images/merch/donate.png'
    }];
});
