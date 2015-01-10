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
        return addList.find();
      },
      'curentId':function()
      {
        return this._id;
      }

    }
  );
}

addList = new Mongo.Collection('ads');