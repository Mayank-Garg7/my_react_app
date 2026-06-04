I have a doubt const startIndex = Math.floor(scrollTop / ITEM_HEIGHT); in this line scrollTop = 0, and ITEM_HEIGHT = 80 so whenever we devide the 0/80 we would get infinity then how the value of startIndex is still 0 here.



<div 
onScroll={(e) => setScrollTop(e.target.scrollTop)} 
style={{ 
    height: WINDOW_HEIGHT, 
    width: '350px',
    overflowY: 'scroll', 
    position: 'relative',
    border: '2px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
}}
>
and here how the onScroll event is working does browswer event have property like scrollTop and please let me know how to check these property like how many property it has so i can use them for later features updates 




