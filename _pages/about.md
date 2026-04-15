---
permalink: /
title: "唐昕蕊（Xinrui Tang）"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## About Me

<p align="justify">
    I am an undergraduate student at Northeastern University (<a href="https://www.neu.edu.cn/">NEU</a>), majoring in Biomedical Engineering. I will soon pursue a master’s degree at Zhejiang University (<a href="https://www.zju.edu.cn/">ZJU</a>) under the supervision of Prof. <a href="https://scholar.google.com/citations?user=Ljk2BvIAAAAJ&hl=en/">Chunhua Shen</a>. My master’s research will focus on perception, embodied intelligence, reinforcement learning, and generative methods. I plan to work on developing an intelligent virtual world generation system that exhibits semantic consistency, long-term memory, interactive controllability, and personalized generation capabilities.
</p>

<p align="justify">
    I also maintain a personal site where I share my notes and thoughts on various topics. You can explore them <a href="https://auroey.github.io/notes">here</a>.
</p>


---

## Education


+ 2022.09 - 2025.07, undergraduate student at Northeastern University.
+ 2025.09 - present, undergraduate student at University of Dundee.

---

## Experience

Your work experience here.

---

## Projects

Your projects here.

---

## Publications

Your publications here.

---

## Skills

Your skills here.

---

## Awards & Honors

Your awards here.

<!-- ======================================================================= -->
<!-- =                                Utils                                = -->
<!-- ======================================================================= -->

<script>
function toggle(prefix, type) {
    function setDisplay(id, display) {
        var x = document.getElementById(id);
        x.style.display = display;
    }

    function toggleDisplay(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "inline";
        } else {
            x.style.display = "none";
        }
    }

    toggleDisplay(prefix + " " + type);
    toggleDisplay(prefix + " " + type + " open");
    toggleDisplay(prefix + " " + type + " close");

    const types = ["Abstract", "Bib"];
    types.forEach(function(t) {
        if (t !== type) {
        setDisplay(prefix + " " + t, 'none');
        setDisplay(prefix + " " + t + " open", 'inline');
        setDisplay(prefix + " " + t + " close", 'none');
        }
    });
}
</script>
