import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    $tabContent.children().eq($li.index()).addClass('active').siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')