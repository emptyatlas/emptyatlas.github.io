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
        desc: '100% Cotton',
        price: 'SOLD OUT',
        link: cremeLogoTShirtLink,
        imagePath: merchImgDir + '/creme_logo_sold_out.png'
                        }, {
        name: 'RED COMPASS T-SHIRT',
        desc: '100% Cotton',
        price: '$10.00',link: redCompassTShirtLink,
        imagePath: merchImgDir + '/red_compass_low_stock.png'
                        }, {
        name: 'GREY LOGO T-SHIRT',
        desc: '100% Cotton',
        price: '$10.00',
        link: lightGreyLogoTShirtLink,
        imagePath: merchImgDir + '/grey_logo_low_stock.png'
                        }, {
        name: 'BLUE COMPASS T-SHIRT',
        desc: '100% Cotton',
        price: '$10.00',
        link: blueCompassTShirtLink,
        imagePath: merchImgDir + '/blue_compass_low_stock.png'
                        }, {
        name: 'ANNIVERSARY ALBUM',
        desc: '9 tracks including 3 B-sides',
        price: '$5.00',
        link: anniversaryCdLink,
        imagePath: merchImgDir + '/anniversary.png'
                        }, {
        name: 'SUPPORT THE BAND',
        desc: '',
        price: 'Donate',
        link: supportTheBandLink,
        imagePath: merchImgDir + '/donate.png'
    }];
});