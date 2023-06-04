$(document).ready(function() {
    $('#form-submit').append(`
    <div id="form-1">
        <div>
            <label for="">Fullname <sup class="required-symbol">*</sup></label><br>
            <input type="text" id="inputFullname" class="input" placeholder="Masukkan Nama" required>
        </div>
        <div>
            <label for="">Email <sup class="required-symbol">*</sup></label><br>
            <input type="text" id="inputEmail" class="input" id="" placeholder="Masukkan Email" required>
        </div>
        <div>
            <label for="">Nomor Telepon <sup class="required-symbol">*</sup></label><br>
            <input type="text" id="inputPhone" class="input" id="inputPhoneNumber" placeholder="Masukkan Nomor Telepon" required>
        </div>
        <div>
            <label for="">Vacancy <sup class="required-symbol">*</sup></label><br>
            <select id="inputVacancy" class="input" required>
                <option value="">- Pilih Lowongan -</option>
            </select>
        </div>
        <div>
            <label for="">Position <sup class="required-symbol">*</sup></label><br>
            <select class="input" id="inputPosition" required>
                <option value="">- Pilih Posisi -</option>
            </select>
        </div>
        <div>
            <button type="submit" class="btn" id="btn-submit-form">Kirim</button>
        </div>
    </div>
            `)
    // Loop Select Vacancy
    var vacancy = ['System Administrator', 'Web Developer', 'Mobile Developer'];
    $.each(vacancy, function(i, data) {
        $('#inputVacancy').append('<option>'+data+'</option>')
    });
    
    var position = ['Kota Bandung', 'Kota Jakarta', 'Kota Surabaya'];
    $.each(position, function(i, data) {
        $('#inputPosition').append('<option>'+data+'</option>')
    });

    // Button Submit Form
    $('#form-submit').on('submit', function(e) {
        $('#form-1').hide();
        e.preventDefault()
        $('#form-submit').append(`
        <div class="alert-success">
            <h4>Terimakasih telah melakukan pengisian, permintaan anda sedang diproses !</h4>
        </div>
        <div id="form-1">
            <div>
                <label for="">Fullname <sup class="required-symbol">*</sup></label><br>
                <p><b>`+$('#inputFullname').val()+`</b></p>
            </div>
            <div>
                <label for="">Email <sup class="required-symbol">*</sup></label><br>
                <p><b>`+$('#inputEmail').val()+`</b></p>
            </div>
            <div>
                <label for="">Nomor Telepon <sup class="required-symbol">*</sup></label><br>
                <p><b>`+$('#inputPhone').val()+`</b></p>
            </div>
            <div>
                <label for="">Vacancy <sup class="required-symbol">*</sup></label><br>
                <p><b>`+$('#inputVacancy').val()+`</b></p>
            </div>
            <div>
                <label for="">Position <sup class="required-symbol">*</sup></label><br>
                <p><b>`+$('#inputPosition').val()+`</b></p>
            </div>
        </div>
        `)
    })

    
});

