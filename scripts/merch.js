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
    var merchImgDir = '/images/merch';

    this.merchList = [{
        name: 'CREME LOGO T-SHIRT',
        siteName: 'Empty Atlas Music',
        price: 'SOLD OUT',
        action: 'SOLD OUT',
        link: cremeLogoTShirtLink,
        imagePath: merchImgDir + '/creme_logo_sold_out.png',
        desc: '100% Cotton'
                        }, {
        name: 'RED COMPASS T-SHIRT',
        siteName: 'Empty Atlas Music',
        price: '$10.00',
        action: 'BUY ONLINE',
        link: redCompassTShirtLink,
        imagePath: merchImgDir + '/red_compass_low_stock.png',
        desc: '100% Cotton'
                        }, {
        name: 'GREY LOGO T-SHIRT',
        siteName: 'Empty Atlas Music',
        price: '$10.00',
        action: 'BUY ONLINE',
        link: lightGreyLogoTShirtLink,
        imagePath: merchImgDir + '/grey_logo_low_stock.png',
        desc: '100% Cotton'
                        }, {
        name: 'BLUE COMPASS T-SHIRT',
        siteName: 'Empty Atlas Music',
        price: '$10.00',
        action: 'BUY ONLINE',
        link: blueCompassTShirtLink,
        imagePath: merchImgDir + '/blue_compass_low_stock.png',
        desc: '100% Cotton'
                        }, {
        name: 'ANNIVERSARY ALBUM',
        siteName: 'Empty Atlas Music',
        price: '$5.00',
        action: 'BUY ONLINE',
        link: anniversaryCdLink,
        imagePath: merchImgDir + '/anniversary.png',
        desc: '9 tracks including 3 B-sides'
                        }, {
        name: 'SUPPORT THE BAND',
        siteName: 'Empty Atlas Music',
        price: 'Any Amount',
        action: 'DONATE',
        link: supportTheBandLink,
        imagePath: merchImgDir + '/donate.png'
    }];
});