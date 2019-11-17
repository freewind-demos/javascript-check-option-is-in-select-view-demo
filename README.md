JavaScript Check Option is In Select View Demo
===================

判断一个multiple select中某个option是否可见（选项过多时，滚动到了不可见的位置）

注意：
1. 某个option或者select的offsetTop指的是它离window顶端的距离，所以要求option离select的距离，要减一下
2. option的offsetTop不会因为滚动而变化（这个有点出乎意料）

Open `index.html` in your browser.
