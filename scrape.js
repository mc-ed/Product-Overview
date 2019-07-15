(function(console) {
    console.save = function(data, filename) {
      if (!data) {
        console.error("Console.save: No data");
        return;
      }
   
      if (!filename) filename = "console.json";
   
      if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4);
      }
   
      var blob = new Blob([data], { type: "text/json" }),
        e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
   
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    };
   })(console);

   function scrappe () {
    let obj = {}
    obj.itemNumber = Number(document.querySelector("#main > div.grid-container > div > section.pd-holder.met-product.grid-100.grid-parent.v-spacing-jumbo > div.pd-left.grid-50.tablet-grid-50.grid-parent > div.pd-numbers.grid-50.tablet-grid-100 > p > span.met-product-item-number").innerText)
    obj.modelNumber = Number(document.querySelector("#main > div.grid-container > div > section.pd-holder.met-product.grid-100.grid-parent.v-spacing-jumbo > div.pd-left.grid-50.tablet-grid-50.grid-parent > div.pd-numbers.grid-50.tablet-grid-100 > p > span.met-product-model").innerText)
    obj.name = $('.pd-title h1')[0].innerText
    obj.price = Number(document.querySelector("#main > div.grid-container > div > section.pd-holder.met-product.grid-100.grid-parent.v-spacing-jumbo > div.pd-right.grid-50.tablet-grid-50.grid-parent.trench.trench-large.no-background.position-relative > div.pd-pricing.grid-100.grid-parent.v-spacing-medium > div.pd-price.grid-100 > div.met-product-price.v-spacing-mini > span.primary-font.jumbo.strong.art-pd-contractPricing").innerText.substring(1))
    obj.smallImages = [];
    obj.largeImages = [];
    obj.summary = [];
    
    $($('.slick-track')[0]).find('img').each((i,img) => {obj.smallImages.push(img.attributes['data-src'].value.split('/').slice(-1).join())})
    $($('.slick-track')[0]).find('img').each((i,img) => {obj.largeImages.push(img.attributes['data-largeurl'].value.split('/').slice(-1).join())})
    $($('.pd-short-desc-listing')[0]).find('li').each((i, li) => {obj.summary.push(li.innerText)})
    
    return obj;
}


