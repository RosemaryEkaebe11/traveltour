const { Profile } = require('../../models');

class UserController {
  static async createProfile(req, res) {
    const {
      first_name,
      last_name,
      phone,
      country,
      marital_status,
      travel_interests,
      destination_preferences,
      travel_frequency,
    } = req.body;

    const name = first_name +" "+ last_name

    const profile = await Profile.create({ 
      first_name,
      last_name,
      phone,
      country,
      marital_status,
      travel_interests,
      destination_preferences,
      travel_frequency,
      name: name,
      id: req?.session?.user?.id,
    });


    if(profile){
      return res.redirect('/dashboard');
    }
    return res.render('error',{
      message: "Unable to create profile"
    });
  }


}

module.exports = UserController;
