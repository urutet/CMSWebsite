var isClicked = false;

$(function() {
    $('.tooltip').each(function() {
        var image = $('<img src="' + $(this).data().image + '" style="display:none"></img>');
        $('body').append(image);
        $(image).css({
            position: "absolute",
            top: $(this).position().top + $(this).height(),
            left: $(this).position().left + 10
        });
        for (var prop in $(this).data()) {
            if (prop != "image") {
                $(image).css(prop, $(this).data()[prop]);
            }
        };
        $(this).click(
            function()
            {
                if(isClicked === false)
                {
                    $(image).fadeIn();
                    isClicked = true;
                }
                else
                {
                    $(image).fadeOut();
                    isClicked = false;
                }
            }
        );
    });
});