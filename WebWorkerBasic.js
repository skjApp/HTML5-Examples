var v = 0;

function timedCount()
{
	v = v + 2;
	postMessage(v);
	setTimeout("timedCount()", 500);
}

timedCount();