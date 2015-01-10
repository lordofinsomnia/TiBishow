if(Meteor.isClient)
{
  Template.ads.ad = function()
  {
    return "prvi oglas1"
  }
  Template.ads.helpers
  (
    {
      'ad':function()
      {
        return adsList.find();
      },
      'curentId':function()
      {
        return this._id;
      }

    }
  );
  Template.addAds.events
  (
    {
      'submit form': function()
      {
        event.preventDefault();
        var adContent = event.target.content.value;
        var adContact = event.target.contact.value;
        var adPrice   = event.target.price.value;

        adsList.insert
        (
          {
            content: adContent,
            contact: adContact,
            price  : adPrice,            
          }

        );

        
        console.log(adContent);
        console.log(adContact);
        console.log(adPrice  );
      }
    }
  );
}

adsList = new Mongo.Collection('ads');