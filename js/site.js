(function($) {
    $(document).ready(function() {
        $('section > h1').wrap('<div class="page-header" />');

        // init syntax highlighting
        hljs.initHighlightingOnLoad();

        // open external links in new window
        $("a[href^='http']:not([href*='docs.ziku.la'])").attr('target', '_blank');

        $('#sidebar .nav a.nav-link.active').parents('.collapse').addClass('show');
    });
})(jQuery)
