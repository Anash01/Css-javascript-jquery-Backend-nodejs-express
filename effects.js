$("button").on("click", function()
{
 $('div').slideToggle(1000, function()
 	{
 		console.log("slide is done");
 	});
 // function()
// 	{
// 		// $(this).remove();
// 		// console.log("fadeOut  completed!");
// 	});
});
