const lessons = [
    { title: "Lesson 1: What is SEO?", explanation: "SEO, or Search Engine Optimization, is the practice of enhancing your website to increase its visibility in search engine results. For nonprofits, SEO means connecting your mission with people looking to support causes like yours. SEO draws 'organic' or 'natural' traffic—visitors who discover you through search engines without paid ads.", tip: "SEO is about making your value known to search engines so they can bring more people to your site.", takeaway: "A well-optimized site can turn search traffic into donors, volunteers, and advocates.", interaction: "Reflect: How do people currently find your nonprofit online? List 3 ways." },
    { title: "Lesson 2: Why SEO Matters for Nonprofits", explanation: "SEO helps nonprofits expand their reach, drive traffic, and increase engagement. Nonprofits rely on community support. With SEO, more people can find your donation page, event sign-ups, and success stories. It’s not about marketing budgets—it’s about being discoverable.", tip: "SEO puts your cause where people are already looking—Google, Bing, and beyond.", takeaway: "SEO helps you attract new supporters and grow long-term awareness of your mission.", interaction: "Ask yourself: What would someone type into Google to find your nonprofit’s services?" },
    { title: "Lesson 3: Social Media for SEO", explanation: "Social media platforms are powerful channels that support your SEO efforts. Sharing stories, events, and donation campaigns through Facebook, Instagram, and other platforms can increase visibility and drive traffic to your site. Adding links in your posts and using share buttons encourages engagement.", tip: "Link back to your site in every post to convert readers into supporters.", takeaway: "Social media boosts SEO by driving traffic and sharing relevant content.", interaction: "Find a recent post and add a direct link to your website or donation page." },
    { title: "Lesson 4: The Power of Backlinks", explanation: "Backlinks—links from other websites to yours—signal to search engines that your site is trustworthy and valuable. High-quality backlinks from media outlets, partners, or guest blogs can improve your search rankings and increase visibility.", tip: "Ask partners or news outlets to link to your site when you're mentioned.", takeaway: "Building trustworthy backlinks helps your nonprofit appear higher in search results.", interaction: "List 2 partners you can reach out to for a backlink this week." },
    { title: "Lesson 5: Create Quality Content", explanation: "Content that’s valuable, well-written, and mission-aligned keeps users engaged and attracts new visitors. Content variety (blogs, videos, infographics) improves experience and SEO. Follow E-A-T: Expertise, Authority, and Trustworthiness.", tip: "Share authentic stories, project updates, and helpful information regularly.", takeaway: "Great content builds trust and keeps your nonprofit top-of-mind for searchers.", interaction: "Brainstorm 3 blog or video ideas that align with your nonprofit’s goals." },
    { title: "Lesson 6: Make the Most of Meta Descriptions", explanation: "Meta descriptions summarize your page content in search results. While they don’t directly affect rankings, they can increase click-through rates if compelling and relevant.", tip: "Use 120–155 characters, include a keyword, and add a call to action.", takeaway: "Clear meta descriptions encourage users to visit your site from search results.", interaction: "Rewrite your homepage meta description using the tips above." },
    { title: "Lesson 7: Local SEO is Your Secret Weapon", explanation: "Local SEO helps people in your area find your nonprofit. Setting up a Google Business Profile, adding your organization to local directories, and encouraging reviews are essential.", tip: "Start by verifying your Google Business listing and ensuring it’s accurate.", takeaway: "Improving local SEO helps you attract volunteers, event attendees, and donors nearby.", interaction: "Google your nonprofit’s name. Do you appear on the map? If not, claim your listing." },
    { title: "Lesson 8: Use the Right Keywords", explanation: "Keywords help search engines understand your content. Choose words your audience would use when searching for services like yours. Include them naturally in your text, titles, and media.", tip: "Use tools like Google Trends or Ubersuggest to find relevant keywords.", takeaway: "Targeted keywords help your nonprofit appear in the right searches.", interaction: "Pick one keyword and add it to a blog title or website heading." },
    { title: "Lesson 9: Make Your Website Mobile-Friendly", explanation: "Most people browse the web on mobile devices. A fast, responsive site with easy navigation improves user experience and SEO ranking.", tip: "Use Google PageSpeed Insights to check how fast your site loads on mobile.", takeaway: "A smooth mobile experience reduces bounce rates and improves search ranking.", interaction: "Visit your site on your phone. Is everything easy to read and click? What needs fixing?" },
    { title: "Lesson 10: Keep Up With SEO Trends", explanation: "Search algorithms change frequently. Staying informed about trends like Core Web Vitals, HTTPS security, and structured data helps your site stay optimized.", tip: "Follow blogs like Moz, Search Engine Journal, or Google Webmaster Central.", takeaway: "Keeping up with SEO trends ensures your nonprofit stays visible and relevant.", interaction: "Bookmark one trusted SEO blog and check it weekly for updates." }
  ];

  const container = document.getElementById("lesson-container");
  const sidebar = document.getElementById("lesson-links");

  lessons.forEach((lesson, index) => {
    const id = `lesson-${index + 1}`;

    // Add to sidebar navigation
    const li = document.createElement("li");
    li.textContent = lesson.title;
    li.onclick = () => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    sidebar.appendChild(li);

    // Add lesson content
    const div = document.createElement("div");
    div.className = "lesson";
    div.id = id;
    div.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.explanation}</p>
      <p><strong>💡 Quick Tip:</strong> ${lesson.tip}</p>
      <p><strong>📌 Takeaway:</strong> ${lesson.takeaway}</p>
      <p><strong>🎯 Interactive:</strong> ${lesson.interaction}</p>
    `;
    container.appendChild(div);
  });