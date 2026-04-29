const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

// Mock Data
const customerData = [
    {
        accountNo: '1021',
        companyName: 'AAT Training Hub',
        authorizedEmail: 'john.smith1@gmail.com',
        authorizedPerson: 'John Smith',
        plan: 'Cloud Telephony Basic',
        phone: '91111021',
        status: 'Active',
        friendlyStatus: 'Your account with AAT Training Hub is Active.',
    },
    {
        accountNo: '1022',
        companyName: 'Absolute Corporate',
        authorizedEmail: 'emma.johnson2@gmail.com',
        authorizedPerson: 'Emma Johnson',
        plan: 'Cloud Telephony Basic',
        phone: '91111022',
        status: 'Active',
        friendlyStatus: "Absolute Corporate's account is currently Active.",
    },
    {
        accountNo: '1023',
        companyName: 'Accord Law Chambers',
        authorizedEmail: 'michael.brown3@gmail.com',
        authorizedPerson: 'Michael Brown',
        plan: 'Cloud Telephony Basic',
        phone: '91111023',
        status: 'Active',
        friendlyStatus: 'Accord Law Chambers is Active.',
    },
    {
        accountNo: '1024',
        companyName: 'Act Point Salon',
        authorizedEmail: 'olivia.davis4@gmail.com',
        authorizedPerson: 'Olivia Davis',
        plan: 'Nautilus Talk Basic',
        phone: '91111024',
        status: 'Active',
        friendlyStatus: 'Act Point Salon account is Active.',
    },
    {
        accountNo: '1025',
        companyName: 'Adept Health',
        authorizedEmail: 'william.miller5@gmail.com',
        authorizedPerson: 'William Miller',
        plan: 'Nautilus Talk Enterprise',
        phone: '91111025',
        status: 'Pending',
        friendlyStatus: 'Adept Health account is currently Pending.',
    },
    {
        accountNo: '1026',
        companyName: 'Advantage Medical Group',
        authorizedEmail: 'sophia.wilson6@gmail.com',
        authorizedPerson: 'Sophia Wilson',
        plan: 'Nautilus Talk Basic',
        phone: '91111026',
        status: 'Active',
        friendlyStatus: 'Advantage Medical Group is Active.',
    },
    {
        accountNo: '1027',
        companyName: 'Afeli Insurance Brokers',
        authorizedEmail: 'james.moore7@gmail.com',
        authorizedPerson: 'James Moore',
        plan: 'Contact Center Enterprise',
        phone: '91111027',
        status: 'Active',
        friendlyStatus: 'Afeli Insurance Brokers is Active.',
    },
    {
        accountNo: '1028',
        companyName: 'Alaska / Decor Singapore',
        authorizedEmail: 'isabella.taylor8@gmail.com',
        authorizedPerson: 'Isabella Taylor',
        plan: 'Cloud Telephony Basic',
        phone: '91111028',
        status: 'Active',
        friendlyStatus: 'Alaska / Decor Singapore is Active.',
    },
    {
        accountNo: '1029',
        companyName: 'Animal Arts',
        authorizedEmail: 'benjamin.anderson9@gmail.com',
        authorizedPerson: 'Benjamin Anderson',
        plan: 'Cloud Telephony Basic',
        phone: '91111029',
        status: 'Active',
        friendlyStatus: 'Animal Arts is Active.',
    },
    {
        accountNo: '1030',
        companyName: 'Arc',
        authorizedEmail: 'mia.thomas10@gmail.com',
        authorizedPerson: 'Mia Thomas',
        plan: 'Cloud Telephony Basic',
        phone: '91111030',
        status: 'Active',
        friendlyStatus: 'Arc account is Active.',
    },
    {
        accountNo: '1031',
        companyName: 'Ascendo Academy',
        authorizedEmail: 'alexander.jackson11@gmail.com',
        authorizedPerson: 'Alexander Jackson',
        plan: 'Cloud Telephony Basic',
        phone: '91111031',
        status: 'Active',
        friendlyStatus: 'Ascendo Academy is Active.',
    },
    {
        accountNo: '1032',
        companyName: 'At-Sunrice',
        authorizedEmail: 'charlotte.white12@gmail.com',
        authorizedPerson: 'Charlotte White',
        plan: 'Cloud Telephony Basic',
        phone: '91111032',
        status: 'Active',
        friendlyStatus: 'At-Sunrice is Active.',
    },
    {
        accountNo: '1033',
        companyName: 'ATOMAXR',
        authorizedEmail: 'daniel.harris13@gmail.com',
        authorizedPerson: 'Daniel Harris',
        plan: 'Cloud Telephony Basic',
        phone: '91111033',
        status: 'Active',
        friendlyStatus: 'ATOMAXR is Active.',
    },
    {
        accountNo: '1034',
        companyName: 'Audio House',
        authorizedEmail: 'amelia.martin14@gmail.com',
        authorizedPerson: 'Amelia Martin',
        plan: 'Contact Center Enterprise',
        phone: '91111034',
        status: 'Active',
        friendlyStatus: 'Audio House is Active.',
    },
    {
        accountNo: '1035',
        companyName: 'Autism Step',
        authorizedEmail: 'matthew.thompson15@gmail.com',
        authorizedPerson: 'Matthew Thompson',
        plan: 'Contact Center Enterprise',
        phone: '91111035',
        status: 'Overdue',
        friendlyStatus: 'Autism Step has an Overdue balance.',
    },
    {
        accountNo: '1036',
        companyName: 'Best Home',
        authorizedEmail: 'harper.garcia16@gmail.com',
        authorizedPerson: 'Harper Garcia',
        plan: 'Contact Center Enterprise',
        phone: '91111036',
        status: 'Active',
        friendlyStatus: 'Best Home is Active.',
    },
    {
        accountNo: '1037',
        companyName: "Brinda's",
        authorizedEmail: 'david.martinez17@gmail.com',
        authorizedPerson: 'David Martinez',
        plan: 'Contact Center Enterprise',
        phone: '91111037',
        status: 'Active',
        friendlyStatus: "Brinda's account is Active.",
    },
    {
        accountNo: '1038',
        companyName: 'Busy Bees',
        authorizedEmail: 'evelyn.robinson18@gmail.com',
        authorizedPerson: 'Evelyn Robinson',
        plan: 'Contact Center Enterprise',
        phone: '91111038',
        status: 'Active',
        friendlyStatus: 'Busy Bees is Active.',
    },
    {
        accountNo: '1039',
        companyName: 'CBRE',
        authorizedEmail: 'joseph.clark19@gmail.com',
        authorizedPerson: 'Joseph Clark',
        plan: 'Nautilus Talk Enterprise',
        phone: '91111039',
        status: 'Active',
        friendlyStatus: 'CBRE is Active.',
    },
    {
        accountNo: '1040',
        companyName: 'LHN',
        authorizedEmail: 'abigail.rodriguez20@gmail.com',
        authorizedPerson: 'Abigail Rodriguez',
        plan: 'Nautilus Talk Enterprise',
        phone: '91111040',
        status: 'Active',
        friendlyStatus: 'LHN account is Active.',
    },
    {
        accountNo: '1041',
        companyName: 'FoodPanda',
        authorizedEmail: 'support@foodpanda.com',
        authorizedPerson: 'Leon Smith',
        plan: 'Enterprise',
        phone: '91111041',
        status: 'Active',
        friendlyStatus: 'FoodPanda is Active.',
    },
    {
        accountNo: '1042',
        companyName: 'Grab',
        authorizedEmail: 'billing@grab.com',
        authorizedPerson: 'Anthony Tan',
        plan: 'Enterprise',
        phone: '91111042',
        status: 'Active',
        friendlyStatus: 'Grab is Active.',
    },
    {
        accountNo: '1043',
        companyName: 'Shopee',
        authorizedEmail: 'admin@shopee.sg',
        authorizedPerson: 'Chris Feng',
        plan: 'Enterprise',
        phone: '91111043',
        status: 'Active',
        friendlyStatus: 'Shopee is Active.',
    },
    {
        accountNo: '1044',
        companyName: 'Lazada',
        authorizedEmail: 'accounts@lazada.com',
        authorizedPerson: 'James Dong',
        plan: 'Enterprise',
        phone: '91111044',
        status: 'Active',
        friendlyStatus: 'Lazada is Active.',
    },
    {
        accountNo: '1045',
        companyName: 'NinjaVan',
        authorizedEmail: 'ops@ninjavan.co',
        authorizedPerson: 'Lai Chang Wen',
        plan: 'Enterprise',
        phone: '91111045',
        status: 'Active',
        friendlyStatus: 'NinjaVan is Active.',
    },
];

router.get('/customer-list/:query', (req, res) => {
  const query = req.params.query.toLowerCase();

  // Multi-field search logic
  const customer = customerData.find(c =>
    c.accountNo.toLowerCase() === query ||
    c.phone.toLowerCase() === query ||
    c.companyName.toLowerCase() === query ||
    c.authorizedEmail.toLowerCase() === query
  );

  if (customer) {
    res.json({ status: "success", data: customer });
  } else {
    // Crucial: return 404 to stop the Zendesk AI from hallucinating
    res.status(404).json({ status: "error", message: "Customer not found" });
  }
});

// Optional: Route to see all for your own testing
router.get('/customer-list', (req, res) => {
  res.json({ status: "success", data: customerData });
});

app.use('/api/', router); // This handles the redirected path
app.use('/.netlify/functions/api/', router); // This handles the direct path

module.exports.handler = serverless(app);
