function getBetTitle(betCard)
{
  return getCards()[betCard].firstChild.innerHTML;
}

function getAnswer(betCard, ans)
{ // ans = 0 or 1
  return getCards()[betCard].children[1].children[0].children[ans];
}

function whatIsSelected(betCard)
{
  var selected = "none";
  var sel = false;
  for(let i = 0; i < getCards()[betCard].children[1].children[0].children.length; i++)
  {
    if(getCards()[betCard].children[1].children[0].children[i].classList.contains("is-selected"))
    {
      selected = i;
      sel = true;
    }
  }
  if (sel)
  {
    return parseInt(selected)
  }
  else
  {
    return selected;
  }
}

function getCards()
{
  return document.getElementsByClassName('bet-card');
}

function isPlaced(betCard)
{
  return getCards()[betCard].children[1].children[0].children[0].classList.contains("is-static");
}

function print()
{
  for (let i = 0; i < getCards().length; i++)
  {
    console.log("--------- " + getBetTitle(i));
    if (whatIsSelected(i) == "none")
    {
      console.log("--- No bet selected")
    }
    else
    {
      console.log("-- Your answer: " + getCards()[i].children[1].children[0].children[whatIsSelected(i)].children[1].innerText);
    }
    console.log('\n');
  }
}

function bet(opt)
{
  var option = -1;
  switch (opt)
  {
    case "A":
      option = 0;
      break;
    case "B":
      option = 1;
      break;
    case "C":
      option = 2;
      break;
    case "D":
      option = 3;
      break;
    case "E":
      option = 4;
      break;
    default:
  }

  for (let i = 0; i < getCards().length; i++)
  {
    if (!isPlaced(i))
    {
      getCards()[i].children[1].children[0].children[option].click();
      console.log("##### ALL BETS PLACED #####");
    }
  }
}

function offPanel()
{
    document.getElementsByClassName('content-panel')[0].innerHTML = "";
    console.log("Panel turned off.");
}

function openCrate()
{
  var open = document.getElementsByClassName('open-button');
  var openCrate = document.getElementsByClassName('open-crate-button');
  var cont = document.getElementsByClassName('continue-button');

  if (open.length != 0)
    {
      open[0].click();
      console.log("Opened crate.")
    }
    if (openCrate.length != 0 && !openCrate[0].classList.contains("is-disabled"))
    {
      openCrate[0].click();
      console.log("Rolled crate.")
    }
    if (cont.length != 0)
    {
      cont[0].click();
      console.log("Continue after crate.")
    }
}

setInterval(function()
{
    bet("A");
    openCrate();
}, 1000);
