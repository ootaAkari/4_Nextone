$(function () {

    // ハンバーガーメニュー
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('rotate-top');
        $('#btn__bottom').toggleClass('rotate-bottom');
        $('#gnav').toggleClass('nav-active');
        return false;
    });

    // ナビゲーション内アコーディオン
    $('#open__icon').on('click', function () {
        $(this).next().slideToggle(500); 
        $(this).toggleClass('plus__open');
        return false;
    });

    // キャッチコピー途中からfixed停止
    let CT = $('#catch__top');
    let CB = $('#catch__bottom');

    let end = $(CB).offset().top;
    let catchHeight = $(CB).height();

    $(document).on('scroll', function () {
        let scrollTop = $(this).scrollTop();
        if ((end - catchHeight) < scrollTop) {
            $(CT).addClass('fixed-none');
            $(CB).addClass('fixed-fadeIn');
        } else {
            $(CT).removeClass('fixed-none');
            $(CB).removeClass('fixed-fadeIn');
        }
        return false;
    });
    // --------------
});