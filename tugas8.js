function myBio() {
    let user = {
        name: 'Syafa',
        umur: 18,
        gaji: 14000000,
        work: ['WFH', 'fulltime']
    }
    //sebelum diubah
    console.log(user);

    user.gaji = 20000000;
    //setelah value diubah
    console.log(user);
}

myBio();