$(document).ready(function() {
    $('.add-to-cart').click(function() {
        var price = parseFloat($(this).data('price'));
        var quantityFieldId = $(this).data('quantity');
        var quantity = parseInt($('#' + quantityFieldId).val());
        var total = price * quantity;
        var currentTotal = parseFloat($('#totalPrice').text().replace('$', ''));
        var newTotal = currentTotal + total;
        $('#totalPrice').text('$' + newTotal.toFixed(2));
    });

    $('.checkout').click(function() {
        var totalPrice = $('#totalPrice').text();
        alert('Total Price: ' + totalPrice);
       
    });

    $('#userInfoForm').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            type: 'POST',
            url: 'submit_order.php', 
            data: formData,
            success: function(response) {
                $('#orderResult').html('<div class="alert alert-success" role="alert">' + response + '</div>');
            },
            error: function(xhr, status, error) {
                $('#orderResult').html('<div class="alert alert-danger" role="alert">Error: ' + error + '</div>');
            }
        });
    });
});