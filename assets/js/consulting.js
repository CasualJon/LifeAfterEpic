var tables;
var subPage = document.getElementById('content');
var data = "";
thingsToKnow();

function thingsToKnow() {
  data = "";

  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"thingsToKnow()\">Things to Know</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"cFirms()\">Consulting Firms</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='../noncompete.html';\">Non-Compete</button><br /><br />";


  data += "<h4>Things I wish I knew before consulting (given by consultants)</h4>";
  data += "<div class=\"text-left\"><p><ul><small>";

  data += "<li>Consulting is what rebuilt my confidence after leaving Epic. Seeing how much I had to contribute and how valued my work was what saved me. That doesn't mean it doesn't feel thankless sometimes or that the travel doesn't get old, but I've found that customers feel like they picked YOU, and you just have to show them their choice was a good one. I have never received as much flattery and gratitude (some likely undeserved) as I have as a consultant.</li><br />";

  data += "<li>You need a high tolerance for instability. I think I assumed there would always be a steady stream of contracts available, even if I had to take things short term that weren't really interesting to me, but that wasn't the case when I went up for my first contract switch. I left a contract at the end of December, and from January to mid-April I was looking for other contracts. At the beginning of the year contracts are really slow, and one that I thought I had locked down fell through at the last minute (i.e. the day before I was supposed to start). There is a lot of that instability and not a lot of the control is in your hands, and that was more stressful for me than I anticipated.</li><br />";

  data += "<li>You need a high level of self-discipline to be successful at this. I knew this going in, but it's still important to call out. Because you really don't have a direct manager, you don't get much feedback, and often no one is checking up on my work (this happened at both my customers on multiple projects). If you're not disciplined, you may not work enough hours (or end up lying about how much you work, which is obviously unethical), or you may fall behind and get called out on it when you're not expecting it. It also is a job where you need a high degree of self-awareness and self-motivation, because you don't get the regular feedback you do at Epic, and some people need that to gauge their success. You don't get that in consulting, you really need to assess your own performance rather than relying on others (or even asking others) for it.</li><br />";

  data += "<li>In my early days consulting, I almost always found myself in roles where I was working for operational leadership as their liaison or house optimization expert. Now I do a combination of sales support, project oversight, subject matter expertise, and internal leadership. I never would have guessed it from my time at Epic, but I'm great with customer and relationship-building - with clients, with my peers, with my direct reports - is a strength of mine. Consulting gave me the opportunity to figure that out and to set a course for myself.</li><br />";

  data += "<li>I love working outside the bureaucracy of a large company - the independence is a good fit for me. However, it's obviously difficult to chart a career progression outside a defined system, so again, you need to be fairly self-directed to be an hourly consultant.</li><br />";

  data += "<li>You are disposable and generally a punching bag in a lot of situations as a consultant. This doesn't bother me, but people who need a high degree of appreciation from their customer to feel valued and useful may not be well suited to this job. I've seen consultants let go from a customer for having one bad meeting. You may also get blamed for a variety of things that are outside your control, depending on the project. I also hear a number of sharp comments about how much we get paid, and how it compares to the value we provide. Again, it doesn't bother me, but it might not be right for folks who are sensitive to those behaviors.</li><br />";

  data += "<li>Managing my own travel is fantastic. Having my own rental car and not having to coordinate with anyone else is fantastic. I didn't realize how much I'd appreciate these things until I started consulting.</li><br />";

  data += "<li>It's not that easy to negotiate lower travel expectations. I don't recommend that anyone go into contracts truly believing that they'll get to lower the expectation a few months in - not that that doesn't happen, it does, but it's not a guarantee. If you won't be happy with 100% travel in two months, don't take a 100% travel expectation contract.</li><br />";

  data += "<li>Ask the consulting firm what they're billing for you versus what your hourly rate is. It likely won't give you negotiating ground, but it's informative about the values of the company and their transparency.</li><br />";

  data += "<li>I think the non-Epic consultants flooding the market for a lower price are devaluing the service we provide, so hourly rates are lower than they historically were and are certainly less negotiable.</li>";

  data += "</ul></small></p></div><!--/left align-->";

  subPage.innerHTML = data;
}

function cFirms() {
  data = "";
  //alreadyRun is held within consultancies.js
  if (!alreadyRun) tables = constructFirmTables();

  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"thingsToKnow()\">Things to Know</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"cFirms()\">Consulting Firms</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='../noncompete.html';\">Non-Compete</button><br /><br />";

  data += "<p><i>If you see incorrect information or needed changes, please get in touch!</i></p><br />";
  data += "<h4>Consulting firms actively providing Epic consulting services</h4>";
  data += "<p>Presented in randomized order. Know that not all are equal, but this page isn't here to play favorites.</p><br /><br />";

  data += "<div class=\"container\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"confirmedFirms\">";
  data += tables[0];
  data += "</tbody></table></div>";

  data += "<br /><h4>Uncertain placement: firms rumored/claiming to offer Epic services, but unable to verify current Epic customers</h4>";
  data += "<p>Presented in randomized order.</p><br />";

  data += "<div class=\"container\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"unconFirms\">";
  data +=  tables[1];
  data += "</tbody></table></div><br /><br />";

  data += "<a href=\"https://medcitynews.com/2016/03/dell-consulting-ntt/\" target=\"_blank\">";
  data += "NTT is purchasing/purchased Dell Healthcare IT Consulting</a> (which was purchased from Perot Systems). I do not know the current status of placement availability.";

  subPage.innerHTML = data;
}
