/**
 * Created by patrickhalton on 3/4/15.
 */
exports.index = function(req,res){
    res.render('default',{
        title: 'Home',
        classname:'home',
        users: ['Ray','Pat','Jon']

    });

};

exports.about = function(req,res){
    res.render('default',{
        title: 'About Us',
        classname:'about'
    });

};